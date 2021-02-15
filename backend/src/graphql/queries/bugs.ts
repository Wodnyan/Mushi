import { GraphQLFieldConfig, GraphQLList } from "graphql";
import BugController from "../../controllers/BugController";
import { BugsType } from "../types/bugs";

const bugsController = new BugController();

const bugs: GraphQLFieldConfig<any, any> = {
  type: GraphQLList(BugsType),
  resolve: async () => {
    return await bugsController.getAll();
  },
};

export const bugsQueries = { bugs };
