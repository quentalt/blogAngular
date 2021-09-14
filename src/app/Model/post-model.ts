export class PostModel {
  constructor(
    public title: string,
    public content: string,
    public loveIts: number,
    public id: number,
    // tslint:disable-next-line:variable-name
    public create_at: Date) {
  }
}

