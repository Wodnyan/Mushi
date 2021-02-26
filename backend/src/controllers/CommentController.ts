import { PrismaClient } from "@prisma/client";
import { RequestUser } from "../types/user";
import prisma from "../db";

interface InsertCommentData {
  authorId: number;
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

  async insert(
    { bugId, comment, authorId }: InsertCommentData,
    user: RequestUser
  ) {
    if (!user || authorId !== user.id) {
      throw new Error("Unathorized");
    }
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
            id: authorId,
          },
        },
      },
    });
    return newComment;
  }
}

export default CommentController;
