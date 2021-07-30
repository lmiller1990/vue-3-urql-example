import { App } from "./App";
import { Book } from "./Book";

export abstract class Context {
  abstract books: Book[]
  app = new App(this)
}