import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParentServiceBase } from "./base/parent.service.base";

@Injectable()
export class ParentService extends ParentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
