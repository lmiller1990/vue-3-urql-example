import { nxs } from "nexus-decorators";
import { Book, BookDetails } from "./Book";
import { Context } from "./Context";

export class App {
  constructor(private ctx: Context) {}

  @nxs.field.nonNull.list.nonNull.type(() => Book, {
    description: "All books in the system",
  })
  get books() {
    return this.ctx.books
  }

  addBook (details: BookDetails) {
    const book = new Book(details)
    this.ctx.books.push(book)
    return book
  }
}
