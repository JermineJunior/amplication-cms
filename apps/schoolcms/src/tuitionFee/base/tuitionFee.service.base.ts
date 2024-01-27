/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TuitionFee } from "@prisma/client";

export class TuitionFeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TuitionFeeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TuitionFeeCountArgs>
  ): Promise<number> {
    return this.prisma.tuitionFee.count(args);
  }

  async tuitionFees<T extends Prisma.TuitionFeeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TuitionFeeFindManyArgs>
  ): Promise<TuitionFee[]> {
    return this.prisma.tuitionFee.findMany(args);
  }
  async tuitionFee<T extends Prisma.TuitionFeeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TuitionFeeFindUniqueArgs>
  ): Promise<TuitionFee | null> {
    return this.prisma.tuitionFee.findUnique(args);
  }
  async createTuitionFee<T extends Prisma.TuitionFeeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TuitionFeeCreateArgs>
  ): Promise<TuitionFee> {
    return this.prisma.tuitionFee.create<T>(args);
  }
  async updateTuitionFee<T extends Prisma.TuitionFeeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TuitionFeeUpdateArgs>
  ): Promise<TuitionFee> {
    return this.prisma.tuitionFee.update<T>(args);
  }
  async deleteTuitionFee<T extends Prisma.TuitionFeeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TuitionFeeDeleteArgs>
  ): Promise<TuitionFee> {
    return this.prisma.tuitionFee.delete(args);
  }
}