import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TeachersAttendeeServiceBase } from "./base/teachersAttendee.service.base";

@Injectable()
export class TeachersAttendeeService extends TeachersAttendeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
