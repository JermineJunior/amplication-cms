import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TuitionFeeServiceBase } from "./base/tuitionFee.service.base";

@Injectable()
export class TuitionFeeService extends TuitionFeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
