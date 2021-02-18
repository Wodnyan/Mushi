import { User } from "@prisma/client";

export interface RequestUser {
  id: User["id"];
  email: User["email"];
}
