import { PrismaClient } from "@prisma/client";
import prisma from "../db";

interface CreateBugParams {
  authorId: number;
  projectId: number;
  description: string;
  title: string;
}

class BugController {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = prisma;
  }

  async createBug({
    description,
    title,
    projectId,
    authorId,
  }: CreateBugParams) {
    const newBug = await this.prisma.bug.create({
      data: {
        title,
        description,
        project: {
          connect: {
            id: projectId,
          },
        },
        author: {
          connect: {
            id: authorId,
          },
        },
      },
    });
    return newBug;
  }
}

export default BugController;
