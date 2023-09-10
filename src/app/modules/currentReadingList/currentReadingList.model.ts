import { Schema, model } from "mongoose";
import { IBookCatalog } from "../bookCatalog/bookCatalog.interface";
import { bookCatalogSchema } from "../bookCatalog/bookCatalog.model";

export const CurrentReadingList = model<IBookCatalog>(
  "CurrentReadingList",
  bookCatalogSchema
);
