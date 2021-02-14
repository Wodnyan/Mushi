import { GraphQLString, GraphQLNonNull, GraphQLFieldConfig } from "graphql";
import { UserType } from "../types/users";
//import { encryptPassword } from "../../lib/utils/password-encryption";
import UserController from "../../controllers/UserController";
import { createRefreshToken } from "../../lib/utils/jwt";

const user = new UserController();

export const addUser: GraphQLFieldConfig<any, any> = {
  type: UserType,
  args: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (_, { username, password, email }, { res }) => {
    const newUser = await user.signUp({ username, password, email });
    const refreshToken = await createRefreshToken(newUser.id);
    res.cookie("refresh_token", refreshToken);
    return newUser;
  },
};

export const userMutations = { addUser };
