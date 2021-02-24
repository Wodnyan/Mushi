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
  args: {
    accessToken: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (_, args, context: { req: Request; res: Response }) => {
    return jwt
      .verifyAccessToken(args.accessToken)
      .then(() => {
        return {
          accessToken: args.accessToken,
        };
      })
      .catch(async (error) => {
        if (error.name === "JsonWebTokenError") {
          throw new Error("Unathorized");
        } else if (error.name === "TokenExpiredError") {
          const { refresh_token: refreshToken } = context.req.cookies;
          try {
            const { userId } = await jwt.verifyRefreshToken(refreshToken);
            const newAccessToken = await jwt.createAccessToken(userId);
            return {
              accessToken: newAccessToken,
            };
          } catch (error) {
            if (
              error.name === "JsonWebTokenError" ||
              error.name === "TokenExpiredError"
            ) {
              throw new Error("Unathorized");
            }
            throw error;
          }
        } else {
          throw error;
        }
      });
  },
};

export const accessTokenMutations = {
  createAccessToken,
};
