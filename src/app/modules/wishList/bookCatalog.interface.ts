import { Types } from "mongoose";
import { IUser } from "../user/user.interface";

export type IBookCatalog = {
  title: string;
  author: string;
  genre: string;
  publicationYear: string;
  creator: any;
  reviews?: string[];
};

export type IBookCatalogFilters = {
  searchTerm?: string;
};
