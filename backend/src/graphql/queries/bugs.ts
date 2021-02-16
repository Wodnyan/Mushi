import {
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from "graphql";
import BugController from "../../controllers/BugController";
import { BugsType } from "../types/bugs";

const bugsController = new BugController();

const bugs: GraphQLFieldConfig<any, any> = {
  type: GraphQLList(BugsType),
  resolve: async () => {
    return await bugsController.getAll();
  },
};

const bug: GraphQLFieldConfig<any, any> = {
  type: BugsType,
  args: {
    bugId: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: async (_, { bugId }) => {
    return await bugsController.getOne(bugId);
  },
};

export const bugsQueries = { bugs, bug };
