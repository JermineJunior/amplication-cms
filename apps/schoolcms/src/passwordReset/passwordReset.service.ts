import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PasswordResetServiceBase } from "./base/passwordReset.service.base";

@Injectable()
export class PasswordResetService extends PasswordResetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
