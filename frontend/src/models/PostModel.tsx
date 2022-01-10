import { UserModel } from "./UserModel";

export type PostModel = {
    title: string;
    body: string;
    owner: UserModel
};