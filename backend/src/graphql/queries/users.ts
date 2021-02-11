import { GraphQLList, GraphQLFieldConfig } from "graphql";
import prisma from "../../db";
import { UserType } from "../types/users";

export const users: GraphQLFieldConfig<any, any> = {
  type: new GraphQLList(UserType),
  description: "List of users",
  resolve: async () => {
    const users = await prisma.user.findMany();
    return users;
  },
};

export const userQueries = { users };
