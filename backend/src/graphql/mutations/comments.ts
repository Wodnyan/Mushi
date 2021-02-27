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
    authorId: { type: new GraphQLNonNull(GraphQLInt) },
    bugId: { type: new GraphQLNonNull(GraphQLInt) },
    comment: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (_, { authorId, bugId, comment }, { req }) => {
    const newComment = await commentController.insert(
      {
        authorId,
        bugId,
        comment,
      },
      req.user
    );
    return newComment;
  },
};

export const commentsMutations = {
  createComment,
};
