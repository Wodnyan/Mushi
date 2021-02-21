import { PrismaClient } from "@prisma/client";
import prisma from "../db";

interface InsertCommentData {
  userId: number;
  bugId: number;
  comment: string;
}

interface GetAllOptions {
  bugId?: number;
}

class CommentController {
  prisma!: PrismaClient;
  constructor() {
    this.prisma = prisma;
  }

  async getAll(options?: GetAllOptions) {
    return await this.prisma.comment.findMany({
      where: {
        id: options?.bugId,
      },
    });
  }

  async getOne(id: number) {
    return await this.prisma.comment.findUnique({
      where: {
        id,
      },
    });
  }

  async insert({ userId, bugId, comment }: InsertCommentData) {
    const newComment = await this.prisma.comment.create({
      data: {
        comment,
        bug: {
          connect: {
            id: bugId,
          },
        },
        author: {
          connect: {
            id: userId,
          },
        },
      },
      include: {
        author: true,
      },
    });
    return newComment;
  }
}

export default CommentController;
