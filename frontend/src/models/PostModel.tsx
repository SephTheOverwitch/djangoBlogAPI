import { UserModel } from "./UserModel";

export class PostModel {
    title: string | undefined;
    body: string | undefined;
    owner?: UserModel;
};