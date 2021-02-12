import { GraphQLString, GraphQLNonNull, GraphQLFieldConfig } from "graphql";
import prisma from "../../db";
import { UserType } from "../types/users";
import { encryptPassword } from "../../lib/utils/password-encryption";

export const addUser: GraphQLFieldConfig<any, any> = {
  type: UserType,
  args: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (_, { username, password, email }) => {
    const hashed = await encryptPassword(password);
    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashed,
      },
    });
    return newUser;
  },
};

export const userMutations = { addUser };
