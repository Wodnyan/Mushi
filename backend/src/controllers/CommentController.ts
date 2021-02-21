import { PrismaClient } from "@prisma/client";
import prisma from "../db";

interface InsertCommentData {
  userId: number;
  bugId: number;
  comment: string;
}

class CommentController {
  prisma!: PrismaClient;
  constructor() {
    this.prisma = prisma;
  }

  async insertComment({ userId, bugId, comment }: InsertCommentData) {
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
