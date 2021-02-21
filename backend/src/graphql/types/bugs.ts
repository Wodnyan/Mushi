import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import CommentController from "../../controllers/CommentController";
import UserController from "../../controllers/UserController";
import { CommentType } from "./comments";
import { UserType } from "./users";

const user = new UserController();
const commentController = new CommentController();

export const BugsType = new GraphQLObjectType({
  name: "Bug",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    isDuplicate: {
      type: GraphQLBoolean,
    },
    createdAt: {
      type: GraphQLString,
    },
    author: {
      type: UserType,
      resolve: async (parent) => {
        return await user.getOne(parent.authorId);
      },
    },
    comments: {
      type: GraphQLList(CommentType),
      resolve: async (parent) => {
        return commentController.getAll({
          bugId: parent.id,
        });
      },
    },
  },
});
