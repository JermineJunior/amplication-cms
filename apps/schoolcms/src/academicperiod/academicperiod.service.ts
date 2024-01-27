import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AcademicperiodServiceBase } from "./base/academicperiod.service.base";

@Injectable()
export class AcademicperiodService extends AcademicperiodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
