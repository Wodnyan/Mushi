import { GraphQLString, GraphQLNonNull, GraphQLFieldConfig } from "graphql";
import { UserType } from "../types/users";
//import { encryptPassword } from "../../lib/utils/password-encryption";
import UserController from "../../controllers/UserController";

const user = new UserController();

export const addUser: GraphQLFieldConfig<any, any> = {
  type: UserType,
  args: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (_, { username, password, email }) => {
    const newUser = await user.signUp({ username, password, email });
    return newUser;
  },
};

export const userMutations = { addUser };
