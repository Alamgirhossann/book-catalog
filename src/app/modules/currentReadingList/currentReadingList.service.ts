import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { CurrentReadingList } from "./currentReadingList.model";
import { ICurrentReadingListBookCatalog } from "./currentReadingList.interface";

const createCurrentReadingList = async (
  payload: ICurrentReadingListBookCatalog
): Promise<ICurrentReadingListBookCatalog> => {
  const isExist = await CurrentReadingList.findOne({ _id: payload._id });
  console.log(payload._id);
  console.log(isExist);
  let createdCurrentReadingList;
  if (!isExist) {
    createdCurrentReadingList = await CurrentReadingList.create(payload);
  } else {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "Book is already exist on current reading list"
    );
  }
  return createdCurrentReadingList;
};

export const CurrentReadingListService = {
  createCurrentReadingList,
};
