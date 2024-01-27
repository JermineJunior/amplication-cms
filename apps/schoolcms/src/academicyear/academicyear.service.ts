import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AcademicyearServiceBase } from "./base/academicyear.service.base";

@Injectable()
export class AcademicyearService extends AcademicyearServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
