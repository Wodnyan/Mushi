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
    description: { type: new GraphQLNonNull(GraphQLString) },
    icon: { type: GraphQLInt },
  },
  resolve: async (_, { ownerId, name, icon, description }) => {
    const newPost = await project.create({ ownerId, name, icon, description });
    return newPost;
  },
};

export const projectMutations = {
  createProject,
};
