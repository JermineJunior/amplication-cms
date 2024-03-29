import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TeacherServiceBase } from "./base/teacher.service.base";

@Injectable()
export class TeacherService extends TeacherServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
