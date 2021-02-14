import { PrismaClient } from "@prisma/client";
import {
  encryptPassword,
  decryptPassword,
} from "../lib/utils/password-encryption";
import { createAccessToken } from "../lib/utils/jwt";
import prisma from "../db";

interface SignUpParams {
  username: string;
  email: string;
  password: string;
}

interface LoginParams {
  email: string;
  password: string;
}

class UserController {
  prisma: PrismaClient;
  constructor() {
    this.prisma = prisma;
  }

  async signUp({ username, email, password }: SignUpParams) {
    const uniqueEmail = await this.isEmailUnique(email);
    if (!uniqueEmail) {
      throw new Error("Email is in use");
    }
    const hashed = await encryptPassword(password);
    const newUser = await this.prisma.user.create({
      data: {
        email,
        username,
        password: hashed,
      },
      select: {
        id: true,
        email: true,
        avatar: true,
        isAdmin: true,
        username: true,
        createdAt: true,
      },
    });
    const accessToken = await createAccessToken(newUser.id);
    return {
      ...newUser,
      accessToken,
    };
  }

  async login({ email, password }: LoginParams) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new Error("Email isn't in use");
    }
    const correctPassword = await decryptPassword(password, user.password!);
    if (!correctPassword) {
      throw new Error("Incorrect password");
    }
    const accessToken = await createAccessToken(user.id);
    return {
      ...user,
      accessToken,
    };
  }

  private async isEmailUnique(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user === null;
  }
}

export default UserController;
