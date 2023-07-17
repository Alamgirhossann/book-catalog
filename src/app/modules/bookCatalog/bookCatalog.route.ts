import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { BookCatalogValidation } from "./bookCatalog.validation";
import { BookCatalogController } from "./bookCatalog.controller";
import auth from "../../middleware/auth";

const router = express.Router();

router.post(
  "/create-bookCatalog",
  auth(),
  validateRequest(BookCatalogValidation.createBookCatalogZodSchema),
  BookCatalogController.createBookCatalog
);

router.get("/:id", BookCatalogController.getSingleBookCatalog);
router.patch(
  "/:id",
  validateRequest(BookCatalogValidation.updateBookCatalogZodSchema),
  BookCatalogController.updateBookCatalog
);
router.delete("/:id", BookCatalogController.deleteBookCatalog);
router.get("/", auth(), BookCatalogController.getAllBookCatalog);

export const BookCatalogRoutes = router;
