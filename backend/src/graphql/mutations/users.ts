import { GraphQLString, GraphQLNonNull, GraphQLFieldConfig } from "graphql";
import { UserType } from "../types/users";
import UserController from "../../controllers/UserController";
import { createRefreshToken } from "../../lib/utils/jwt";

const user = new UserController();

export const signUp: GraphQLFieldConfig<any, any> = {
  type: UserType,
  args: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (_, { username, password, email }, { res }) => {
    const newUser = await user.signUp({ username, password, email });
    const refreshToken = await createRefreshToken(newUser.id);
    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
    });
    return newUser;
  },
};

export const login: GraphQLFieldConfig<any, any> = {
  type: UserType,
  args: {
    password: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (_, { password, email }, { res }) => {
    const loggedInUser = await user.login({ password, email });
    const refreshToken = await createRefreshToken(loggedInUser.id);
    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
    });
    return loggedInUser;
  },
};

export const userMutations = { login, signUp };
