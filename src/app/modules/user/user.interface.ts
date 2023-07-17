/* eslint-disable no-unused-vars */
import { Model, Types } from "mongoose";

export type IUser = {
  email: string;
  password: string;
};

export type UserModel = {
  isUserExist(id: string): Promise<Pick<IUser, "email" | "password">>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;
