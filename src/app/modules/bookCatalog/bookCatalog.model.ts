import { Schema, model } from "mongoose";
import { IBookCatalog } from "./bookCatalog.interface";

export const bookCatalogSchema = new Schema<IBookCatalog>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationYear: {
      type: String,
      required: true,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    finish: {
      type: Boolean,
      default: false,
    },
    reviews: [
      {
        type: String,
        required: false,
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const BookCatalog = model<IBookCatalog>(
  "BookCatalog",
  bookCatalogSchema
);
