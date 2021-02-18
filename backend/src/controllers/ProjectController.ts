import { PrismaClient } from "@prisma/client";
import prisma from "../db";
import { RequestUser } from "../types/user";

interface CreateParams {
  ownerId: number;
  name: string;
  description: string;
  icon?: string;
}

class ProjectController {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = prisma;
  }

  public async getAll() {
    const allProjects = await this.prisma.project.findMany({
      include: {
        owner: true,
      },
    });
    return allProjects;
  }

  public async getOne(id: number) {
    return await this.prisma.project.findUnique({
      where: {
        id,
      },
    });
  }

  public async create(
    { ownerId, name, icon, description }: CreateParams,
    user: RequestUser
  ) {
    if (!user || ownerId !== user.id) {
      throw new Error("Unathorized");
    }
    const newProject = await this.prisma.project.create({
      data: {
        name,
        icon,
        description,
        owner: {
          connect: {
            id: ownerId,
          },
        },
      },
    });
    return newProject;
  }
}

export default ProjectController;
