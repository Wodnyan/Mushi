import {
  GraphQLFieldConfig,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} from "graphql";
import { ProjectType } from "../types/projects";
import ProjectController from "../../controllers/ProjectController";

const project = new ProjectController();

const createProject: GraphQLFieldConfig<any, any> = {
  type: ProjectType,
  args: {
    ownerId: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    icon: { type: GraphQLInt },
  },
  resolve: (_, { ownerId, name, icon }) => {
    const newPost = project.create({ ownerId, name, icon });
    return newPost;
  },
};

export const postMutations = {
  createProject,
};
