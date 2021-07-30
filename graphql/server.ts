import { graphqlHTTP } from "express-graphql";
import express from "express";
import cors from "cors";
import { graphqlSchema } from "./schema";
import { Context } from "./Context";
import { Book } from "./Book";

const app = express();

class ServerContext extends Context {
  books = [new Book({ title: "My book", author: "Lachlan", year: 1990 })];
}

const context = new ServerContext()

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP(() => {
    return {
      schema: graphqlSchema,
      graphiql: true,
      context,
    };
  })
);

app.listen(4000, () => {
  console.log("Started server on 4000");
});
