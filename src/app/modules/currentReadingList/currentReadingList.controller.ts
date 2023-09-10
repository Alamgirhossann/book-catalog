import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { CurrentReadingListService } from "./currentReadingList.service";

const createCurrentReadingList = catchAsync(
  async (req: Request, res: Response) => {
    const { ...readingListData } = req.body;
    const result = await CurrentReadingListService.createCurrentReadingList(
      readingListData
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Current reading list Created Successfully",
      data: result,
    });
  }
);

export const CurrentReadingListController = {
  createCurrentReadingList,
};
