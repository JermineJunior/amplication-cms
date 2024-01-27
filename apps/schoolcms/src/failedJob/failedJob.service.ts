import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FailedJobServiceBase } from "./base/failedJob.service.base";

@Injectable()
export class FailedJobService extends FailedJobServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
