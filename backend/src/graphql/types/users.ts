import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
} from "graphql";

export const UserType = new GraphQLObjectType({
  name: "User",
  description: "Represents a user",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    username: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLString },
    avatar: { type: GraphQLString },
    isAdmin: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString },
  },
});
