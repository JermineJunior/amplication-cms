/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TeachersPayment } from "@prisma/client";

export class TeachersPaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TeachersPaymentCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TeachersPaymentCountArgs>
  ): Promise<number> {
    return this.prisma.teachersPayment.count(args);
  }

  async teachersPayments<T extends Prisma.TeachersPaymentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TeachersPaymentFindManyArgs>
  ): Promise<TeachersPayment[]> {
    return this.prisma.teachersPayment.findMany(args);
  }
  async teachersPayment<T extends Prisma.TeachersPaymentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TeachersPaymentFindUniqueArgs>
  ): Promise<TeachersPayment | null> {
    return this.prisma.teachersPayment.findUnique(args);
  }
  async createTeachersPayment<T extends Prisma.TeachersPaymentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TeachersPaymentCreateArgs>
  ): Promise<TeachersPayment> {
    return this.prisma.teachersPayment.create<T>(args);
  }
  async updateTeachersPayment<T extends Prisma.TeachersPaymentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TeachersPaymentUpdateArgs>
  ): Promise<TeachersPayment> {
    return this.prisma.teachersPayment.update<T>(args);
  }
  async deleteTeachersPayment<T extends Prisma.TeachersPaymentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TeachersPaymentDeleteArgs>
  ): Promise<TeachersPayment> {
    return this.prisma.teachersPayment.delete(args);
  }
}
