import { GraphQLList, GraphQLFieldConfig } from "graphql";
import UserController from "../../controllers/UserController";
import { UserType } from "../types/users";

const userController = new UserController();

export const users: GraphQLFieldConfig<any, any> = {
  type: new GraphQLList(UserType),
  description: "List of users",
  resolve: async () => {
    const users = await userController.getAll();
    return users;
  },
};

export const user: GraphQLFieldConfig<any, any> = {
  type: UserType,
  resolve: async (_, _1, { req }) => {
    const user = userController.getOne(req.user?.id);
    return user;
  },
};

export const userQueries = { users, user };
