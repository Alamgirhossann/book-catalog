import { Schema, model } from "mongoose";
import { IBookCatalog } from "../bookCatalog/bookCatalog.interface";
import { bookCatalogSchema } from "../bookCatalog/bookCatalog.model";

// const WishListSchema = new Schema<IBookCatalog>(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     author: {
//       type: String,
//       required: true,
//     },
//     genre: {
//       type: String,
//       required: true,
//     },
//     publicationYear: {
//       type: String,
//       required: true,
//     },
//     creator: {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//     },
//     reviews: [
//       {
//         type: String,
//         required: false,
//       },
//     ],
//   },
//   {
//     timestamps: true,
//     toJSON: {
//       virtuals: true,
//     },
//   }
// );

export const WishList = model<IBookCatalog>("WishList", bookCatalogSchema);
