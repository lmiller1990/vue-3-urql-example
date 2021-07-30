import { nxs } from "nexus-decorators";
import { App } from "./App";
import { Book } from "./Book";
import { Context } from "./Context";
import { NexusGenTypes } from "./gen/nxs.gen"

@nxs.objectType({
  description: "root query",
})
export class Query {
  constructor(private ctx: Context) {}

  @nxs.field.nonNull.type(() => App)
  app(_: any, ctx: NexusGenTypes["context"]) {
    return ctx.app;
  }

  @nxs.field.nonNull.list.nonNull.type(() => Book)
  books(_: any, ctx: NexusGenTypes["context"]) {
    return ctx.app.books;
  }
}
