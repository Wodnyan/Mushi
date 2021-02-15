import {
  GraphQLNonNull,
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLList,
} from "graphql";
import ProjectController from "../../controllers/ProjectController";
import { ProjectType } from "../types/projects";

const projectController = new ProjectController();

const projects: GraphQLFieldConfig<any, any> = {
  type: new GraphQLList(ProjectType),
  resolve: async () => {
    const allProjects = await projectController.getAll();
    return allProjects;
  },
};

const project: GraphQLFieldConfig<any, any> = {
  type: ProjectType,
  args: {
    projectId: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: async (_, { projectId }) => {
    return await projectController.getOne(projectId);
  },
};

export const projectQueries = { projects, project };
