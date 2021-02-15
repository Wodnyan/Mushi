import { GraphQLSchema, GraphQLObjectType } from "graphql";

import { userQueries } from "./queries/users";
import { projectQueries } from "./queries/projects";

import { userMutations } from "./mutations/users";
import { projectMutations } from "./mutations/projects";
import { bugsMutations } from "./mutations/bugs";

const rootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    ...userQueries,
    ...projectQueries,
  },
});

const rootMutationType = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    ...userMutations,
    ...projectMutations,
    ...bugsMutations,
  },
});

const rootSchema = new GraphQLSchema({
  query: rootQueryType,
  mutation: rootMutationType,
});

export default rootSchema;
