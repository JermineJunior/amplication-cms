import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TeachersPaymentServiceBase } from "./base/teachersPayment.service.base";

@Injectable()
export class TeachersPaymentService extends TeachersPaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
