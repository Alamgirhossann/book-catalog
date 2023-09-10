import express from "express";
import validateRequest from "../../middleware/validateRequest";
import auth from "../../middleware/auth";
import { WishListController } from "./wishList.controller";

const router = express.Router();

router.post(
  "/create-wishList",
  auth(),
  // validateRequest(BookCatalogValidation.createBookCatalogZodSchema),
  WishListController.createWishList
);

// router.post(
//   "/create-currentlyReading",
//   auth(),
//   // validateRequest(BookCatalogValidation.createBookCatalogZodSchema),
//   WishListController
// );

export const WishListRoutes = router;
