import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import UserController from "../../controllers/UserController";
import { UserType } from "./users";

const user = new UserController();

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
