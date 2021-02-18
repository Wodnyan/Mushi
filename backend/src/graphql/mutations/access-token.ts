import { Request, Response } from "express";
import {
  GraphQLFieldConfig,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from "graphql";
import * as jwt from "../../lib/utils/jwt";

const AccessTokenType = new GraphQLObjectType({
  name: "AccessToken",
  fields: {
    accessToken: { type: new GraphQLNonNull(GraphQLString) },
  },
});

export const createAccessToken: GraphQLFieldConfig<any, any> = {
  type: AccessTokenType,
  resolve: async (_, _1, context: { req: Request; res: Response }) => {
    const { user } = context.req;
    const { res } = context;
    if (!user) {
      res.status(401);
      throw new Error("Provide a valid auth token");
    }
    const accessToken = await jwt.createAccessToken(user.id);
    return {
      accessToken,
    };
  },
};

export const accessTokenMutations = {
  createAccessToken,
};
