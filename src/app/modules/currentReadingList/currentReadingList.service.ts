import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { IBookCatalog } from "../bookCatalog/bookCatalog.interface";
import { CurrentReadingList } from "./currentReadingList.model";

const createCurrentReadingList = async (
  payload: IBookCatalog
): Promise<IBookCatalog> => {
  let currentReading;
  if (payload) {
    currentReading = await CurrentReadingList.create(payload);
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, "No data sent");
  }
  if (!createCurrentReadingList) {
    throw new ApiError(400, "Faild to create currently reading list");
  }
  return currentReading;
};

export const CurrentReadingListService = {
  createCurrentReadingList,
};
