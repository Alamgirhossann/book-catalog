import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { WishListService } from "./wishList.service";

const createWishList = catchAsync(async (req: Request, res: Response) => {
  const { ...wishListData } = req.body;
  // console.log(wishListData);
  const result = await WishListService.createWishList(wishListData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Wish list Created Successfully",
    data: result,
  });
});

export const WishListController = {
  createWishList,
};
