import { inputObjectType, mutationType, nonNull } from "nexus";

export const Mutation = mutationType({
  definition (t) {
    t.field('addBook', {
      type: 'Book',
      description: "Add a book",
      args: { 
        input: nonNull(inputObjectType({
          name: 'BookInput',
          definition (t) {
            t.nonNull.string('title')
            t.nonNull.string('author')
            t.nonNull.int('year')
          }
        }))
      },
      async resolve (root, args, ctx) {
        return ctx.app.addBook(args.input)
      }
    })
  }
})