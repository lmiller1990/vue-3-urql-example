import { nxs } from "nexus-decorators";

export interface BookDetails {
  title: string;
  author: string;
  year: number;
}

@nxs.objectType({
  description: "Represents a book",
})
export class Book {
  constructor(private details: BookDetails) {}

  @nxs.field.nonNull.string()
  get title() {
    return this.details.title;
  }

  @nxs.field.nonNull.string()
  get author() {
    return this.details.author;
  }

  @nxs.field.nonNull.int()
  get year() {
    return this.details.year;
  }
}
