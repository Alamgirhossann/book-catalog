import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { BookCatalogService } from "./bookCatalog.service";
import { IBookCatalog } from "./bookCatalog.interface";
import pick from "../../../shared/pick";
import { pagination } from "../../../constants/pagination";
import { bookCatalogFilterableFields } from "./bookCatalog.constant";

const createBookCatalog = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  // console.log(user);
  const { ...bookCatalogData } = req.body;
  const result = await BookCatalogService.createBookCatalog(
    user,
    bookCatalogData
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Created Successfully",
    data: result,
  });
});

const createWishList = catchAsync(async (req: Request, res: Response) => {
  const { ...wishListData } = req.body;
  const result = await BookCatalogService.createWishList(wishListData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Wish list Created Successfully",
    data: result,
  });
});

const getAllBookCatalog = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  // console.log(user);
  const filters = pick(req.query, bookCatalogFilterableFields);
  const paginationOption = pick(req.query, pagination);

  const result = await BookCatalogService.getAllBookCatalog(
    filters,
    paginationOption,
    user
  );
  sendResponse<IBookCatalog[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book catalog retrived successfully",
    meta: result.meta,
    data: result.data,
  });
});

const getSingleBookCatalog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await BookCatalogService.getSingleBookCatalog(id);
  sendResponse<IBookCatalog>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book catalog retrived successfully",
    data: result,
  });
});

const updateBookCatalog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await BookCatalogService.updateBookCatalog(id, updatedData);
  sendResponse<IBookCatalog>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book catalog updated successfully",
    data: result,
  });
});

const deleteBookCatalog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookCatalogService.deleteBookCatalog(id);
  sendResponse<IBookCatalog>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book catalog deleted successfully",
    data: result,
  });
});

export const BookCatalogController = {
  createBookCatalog,
  getAllBookCatalog,
  getSingleBookCatalog,
  updateBookCatalog,
  deleteBookCatalog,
  createWishList,
};
