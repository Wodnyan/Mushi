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

  public async getAll() {
    return await this.prisma.bug.findMany({
      include: {
        author: true,
        project: true,
      },
    });
  }

  public async getOne(id: number) {
    return await this.prisma.bug.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
        project: true,
      },
    });
  }
}

export default BugController;
