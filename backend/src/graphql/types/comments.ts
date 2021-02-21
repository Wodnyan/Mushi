import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} from "graphql";
import UserController from "../../controllers/UserController";
import { UserType } from "./users";

const userController = new UserController();

export const CommentType = new GraphQLObjectType({
  name: "Comment",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    comment: {
      type: new GraphQLNonNull(GraphQLString),
    },
    author: {
      type: UserType,
      resolve: async (parent) => {
        const author = await userController.getOne(parent.authorId);
        return author;
      },
    },
    createdAt: { type: GraphQLString },
  },
});
