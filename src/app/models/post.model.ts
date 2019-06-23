export class Post {
  constructor(
    public title: string,
    public content: string,
    public loveIts: number,
    public dloveIts: number,
    public created_at: Date
  ) {}
}
