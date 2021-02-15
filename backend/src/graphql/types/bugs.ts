import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import ProjectController from "../../controllers/ProjectController";
import UserController from "../../controllers/UserController";
import { ProjectType } from "./projects";
import { UserType } from "./users";

const user = new UserController();
const project = new ProjectController();

export const BugsType = new GraphQLObjectType({
  name: "Bug",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    isDuplicate: {
      type: GraphQLBoolean,
    },
    createdAt: {
      type: GraphQLString,
    },
    author: {
      type: UserType,
      resolve: async (parent) => {
        return await user.getOne(parent.authorId);
      },
    },
    project: {
      type: ProjectType,
      resolve: async (parent) => {
        return await project.getOne(parent.projectId);
      },
    },
  },
});
