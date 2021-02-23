import {
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
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
    projectId: { type: GraphQLInt },
    projectName: { type: GraphQLString },
  },
  resolve: async (_, { projectId, projectName }) => {
    return await projectController.getOne({
      id: projectId,
      name: projectName,
    });
  },
};

export const projectQueries = { projects, project };
