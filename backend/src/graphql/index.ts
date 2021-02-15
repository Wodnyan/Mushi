import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { userQueries } from "./queries/users";
import { userMutations } from "./mutations/users";
import { postMutations } from "./mutations/projects";

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
    ...postMutations,
  },
});

const rootSchema = new GraphQLSchema({
  query: rootQueryType,
  mutation: rootMutationType,
});

export default rootSchema;
