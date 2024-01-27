import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MigrationServiceBase } from "./base/migration.service.base";

@Injectable()
export class MigrationService extends MigrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
