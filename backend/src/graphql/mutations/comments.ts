import {
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import CommentController from "../../controllers/CommentController";
import { CommentType } from "../types/comments";

const commentController = new CommentController();

const createComment: GraphQLFieldConfig<any, any> = {
  type: CommentType,
  args: {
    userId: { type: new GraphQLNonNull(GraphQLInt) },
    bugId: { type: new GraphQLNonNull(GraphQLInt) },
    comment: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (_, { userId, bugId, comment }) => {
    const newComment = await commentController.insertComment({
      userId,
      bugId,
      comment,
    });
    return newComment;
  },
};

export const commentsMutations = {
  createComment,
};
