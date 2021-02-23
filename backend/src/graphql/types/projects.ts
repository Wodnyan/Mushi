import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import BugController from "../../controllers/BugController";
import UserController from "../../controllers/UserController";
import { BugsType } from "./bugs";
import { UserType } from "./users";

const user = new UserController();
const bugsController = new BugController();

export const ProjectType = new GraphQLObjectType({
  name: "Project",
  description: "The project of a user",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    icon: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    bugs: {
      type: GraphQLList(BugsType),
      resolve: async (parent) => {
        const bugs = await bugsController.getAll({
          projectId: parent.id,
        });
        return bugs;
      },
    },
    owner: {
      type: UserType,
      resolve: async (parent) => {
        const owner = await user.getOne(parent.ownerId);
        return owner;
      },
    },
    createdAt: { type: GraphQLString },
  },
});
