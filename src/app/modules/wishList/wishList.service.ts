import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { IBookCatalog } from "../bookCatalog/bookCatalog.interface";
import { WishList } from "./wishList.model";

const createWishList = async (payload: IBookCatalog): Promise<IBookCatalog> => {
  let createdWishList;
  if (payload) {
    createdWishList = await WishList.create(payload);
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, "No data sent");
  }
  if (!createWishList) {
    throw new ApiError(400, "Faild to create wish list");
  }
  return createdWishList;
};

export const WishListService = {
  createWishList,
};
