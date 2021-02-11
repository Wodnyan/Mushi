import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";

const rootSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "hello world";
        },
      },
    },
  }),
});

export default rootSchema;
