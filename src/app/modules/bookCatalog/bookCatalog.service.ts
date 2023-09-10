import { JwtPayload } from "jsonwebtoken";
import { IBookCatalog, IBookCatalogFilters } from "./bookCatalog.interface";
import { User } from "../user/user.model";
import { BookCatalog } from "./bookCatalog.model";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { IGenericResponse } from "../../../interfaces/error";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { SortOrder, Types } from "mongoose";
import { bookCatalogSearchableFields } from "./bookCatalog.constant";

const createBookCatalog = async (
  user: JwtPayload | null,
  payload: IBookCatalog
): Promise<IBookCatalog> => {
  let createdCow;
  if (payload) {
    const isUser = await User.findOne({ email: user?.userId });
    payload.creator = isUser?._id;
    createdCow = (await BookCatalog.create(payload)).populate("creator");
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, "User Not Found");
  }
  if (!createBookCatalog) {
    throw new ApiError(400, "Faild to create user");
  }
  return createdCow;
};

const createWishList = async (payload: IBookCatalog): Promise<IBookCatalog> => {
  let createdWishList;
  if (payload) {
    createdWishList = await BookCatalog.create(payload);
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, "No data sent");
  }
  if (!createWishList) {
    throw new ApiError(400, "Faild to create wish list");
  }
  return createdWishList;
};

const getAllBookCatalog = async (
  filters: IBookCatalogFilters,
  paginationOptions: IPaginationOptions,
  user: JwtPayload | null
): Promise<IGenericResponse<IBookCatalog[]>> => {
  const isUser = await User.findOne({ email: user?.userId });
  console.log(isUser);
  const { searchTerm, ...filtersData } = filters;
  const { sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: bookCatalogSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await BookCatalog.find(whereConditions).sort(sortConditions);
  // .skip(skip)
  // .limit(limit);

  const filterData = result.filter((i) => i.creator == isUser?.id);

  const total = await BookCatalog.countDocuments();

  return {
    meta: {
      // page,
      // limit,
      total,
    },
    data: filterData,
  };
};

const getSingleBookCatalog = async (
  id: string
): Promise<IBookCatalog | null> => {
  const result = await BookCatalog.findById(id);
  return result;
};

const updateBookCatalog = async (
  id: string,
  payload: Partial<IBookCatalog>
): Promise<IBookCatalog | null> => {
  if (!payload) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Invalid Update request");
  }
  const result = await BookCatalog.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteBookCatalog = async (id: string): Promise<IBookCatalog | null> => {
  const result = await BookCatalog.findByIdAndDelete(id);
  return result;
};

export const BookCatalogService = {
  createBookCatalog,
  getAllBookCatalog,
  getSingleBookCatalog,
  updateBookCatalog,
  deleteBookCatalog,
  createWishList,
};
