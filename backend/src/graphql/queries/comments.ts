import {
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from "graphql";
import CommentController from "../../controllers/CommentController";
import { CommentType } from "../types/comments";

const commentControllers = new CommentController();

const comments: GraphQLFieldConfig<any, any> = {
  type: GraphQLList(CommentType),
  args: {
    bugId: { type: GraphQLInt },
  },
  resolve: async (_, { bugId }) => {
    return await commentControllers.getAll({ bugId });
  },
};

const comment: GraphQLFieldConfig<any, any> = {
  type: CommentType,
  args: {
    commentId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: async (_, { commentId }) => {
    return await commentControllers.getOne(commentId);
  },
};

export const commentsQueries = {
  comments,
  comment,
};
