export class PostModel {
  title: string | undefined;
  body: string | undefined;
  owner?: string | undefined;

  constructor(title: string, body: string) {
    this.body = body;
    this.title = title;
  }
}
