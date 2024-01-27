import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClassroomServiceBase } from "./base/classroom.service.base";

@Injectable()
export class ClassroomService extends ClassroomServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
