import path from "path";
import { makeSchema } from "nexus";
import { Book } from "./Book";
import { Query } from "./Query";
import { Mutation } from "./Mutation";

export const graphqlSchema = makeSchema({
  types: [Book, Query, Mutation],
  shouldGenerateArtifacts: true,
  shouldExitAfterGenerateArtifacts: Boolean(process.env.GRAPHQL_CODEGEN),
  outputs: {
    typegen: path.join(__dirname, "gen/nxs.gen.ts"),
    schema: path.join(__dirname, "schema.graphql"),
  },
  contextType: {
    module: path.join(__dirname, "./Context.ts"),
    export: "Context",
  },
});