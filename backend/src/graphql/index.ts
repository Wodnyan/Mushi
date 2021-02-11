import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { userQueries } from "./queries/users";
import { userMutations } from "./mutations/users";

const rootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    ...userQueries,
  },
});

const rootMutationType = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    ...userMutations,
  },
});

const rootSchema = new GraphQLSchema({
  query: rootQueryType,
  mutation: rootMutationType,
});

export default rootSchema;
