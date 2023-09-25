import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { WishList } from "./wishList.model";
import { IWishListBookCatalog } from "./wishList.interface";

const createWishList = async (
  payload: IWishListBookCatalog
): Promise<IWishListBookCatalog> => {
  const isExist = await WishList.findOne({ _id: payload._id });
  console.log(payload._id);
  console.log(isExist);
  let createdWishList;
  if (!isExist) {
    createdWishList = await WishList.create(payload);
  } else {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "Book is already exist on wish list"
    );
  }
  return createdWishList;
};

export const WishListService = {
  createWishList,
};
