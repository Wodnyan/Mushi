import {
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import { BugsType } from "../types/bugs";
import BugController from "../../controllers/BugController";

const bug = new BugController();

const createBug: GraphQLFieldConfig<any, any> = {
  type: BugsType,
  args: {
    authorId: { type: new GraphQLNonNull(GraphQLInt) },
    projectId: { type: new GraphQLNonNull(GraphQLInt) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (_, { authorId, projectId, title, description }) => {
    const newBug = await bug.createBug({
      authorId,
      projectId,
      title,
      description,
    });
    return newBug;
  },
};

export const bugsMutations = {
  createBug,
};
