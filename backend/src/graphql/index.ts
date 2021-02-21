import { GraphQLSchema, GraphQLObjectType } from "graphql";

import { userQueries } from "./queries/users";
import { projectQueries } from "./queries/projects";
import { bugsQueries } from "./queries/bugs";
import { commentsQueries } from "./queries/comments";

import { userMutations } from "./mutations/users";
import { projectMutations } from "./mutations/projects";
import { bugsMutations } from "./mutations/bugs";
import { accessTokenMutations } from "./mutations/access-token";
import { commentsMutations } from "./mutations/comments";

const rootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    ...userQueries,
    ...projectQueries,
    ...bugsQueries,
    ...commentsQueries,
  },
});

const rootMutationType = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    ...userMutations,
    ...projectMutations,
    ...bugsMutations,
    ...accessTokenMutations,
    ...commentsMutations,
  },
});

const rootSchema = new GraphQLSchema({
  query: rootQueryType,
  mutation: rootMutationType,
});

export default rootSchema;
