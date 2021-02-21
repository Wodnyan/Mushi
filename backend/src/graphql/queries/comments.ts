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
  resolve: async () => {
    return await commentControllers.getAll();
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
