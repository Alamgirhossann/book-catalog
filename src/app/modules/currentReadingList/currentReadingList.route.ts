import express from "express";
import validateRequest from "../../middleware/validateRequest";
import auth from "../../middleware/auth";
import { CurrentReadingListController } from "./currentReadingList.controller";

const router = express.Router();

router.post(
  "/create-currentlyReading",
  auth(),
  // validateRequest(BookCatalogValidation.createBookCatalogZodSchema),
  CurrentReadingListController.createCurrentReadingList
);

export const CurrentReadingRoutes = router;
