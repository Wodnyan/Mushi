import { PrismaClient } from "@prisma/client";
import prisma from "../db";

interface CreateParams {
  ownerId: number;
  name: string;
  icon?: string;
}

class ProjectController {
  prisma: PrismaClient;
  constructor() {
    this.prisma = prisma;
  }

  public async create({ ownerId, name, icon }: CreateParams) {
    const newProject = await this.prisma.project.create({
      data: {
        name,
        icon,
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
