import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { BookCatalogRoutes } from "../modules/bookCatalog/bookCatalog.route";
import { WishListRoutes } from "../modules/wishList/wishList.route";
import { CurrentReadingRoutes } from "../modules/currentReadingList/currentReadingList.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/bookCatalog",
    route: BookCatalogRoutes,
  },
  {
    path: "/wishList",
    route: WishListRoutes,
  },
  {
    path: "/currentReading",
    route: CurrentReadingRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
