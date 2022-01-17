import { UserModel } from "./UserModel";

export class PostModel {
    title: string | undefined;
    body: string | undefined;
    owner?: UserModel;

    constructor(title: string, body: string, owner?: UserModel) {
        this.body = body
        this.title = title
        this.owner = owner
    }
}