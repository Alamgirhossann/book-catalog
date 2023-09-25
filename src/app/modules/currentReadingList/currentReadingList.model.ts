import { Schema, model } from "mongoose";
import { ICurrentReadingListBookCatalog } from "./currentReadingList.interface";

const CurrentReadingListSchema = new Schema<ICurrentReadingListBookCatalog>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: false,
    },
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

export const CurrentReadingList = model<ICurrentReadingListBookCatalog>(
  "CurrentReadingList",
  CurrentReadingListSchema
);
