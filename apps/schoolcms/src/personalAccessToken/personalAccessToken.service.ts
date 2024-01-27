import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PersonalAccessTokenServiceBase } from "./base/personalAccessToken.service.base";

@Injectable()
export class PersonalAccessTokenService extends PersonalAccessTokenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
