/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, FailedJob } from "@prisma/client";

export class FailedJobServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FailedJobCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.FailedJobCountArgs>
  ): Promise<number> {
    return this.prisma.failedJob.count(args);
  }

  async failedJobs<T extends Prisma.FailedJobFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FailedJobFindManyArgs>
  ): Promise<FailedJob[]> {
    return this.prisma.failedJob.findMany(args);
  }
  async failedJob<T extends Prisma.FailedJobFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FailedJobFindUniqueArgs>
  ): Promise<FailedJob | null> {
    return this.prisma.failedJob.findUnique(args);
  }
  async createFailedJob<T extends Prisma.FailedJobCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FailedJobCreateArgs>
  ): Promise<FailedJob> {
    return this.prisma.failedJob.create<T>(args);
  }
  async updateFailedJob<T extends Prisma.FailedJobUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FailedJobUpdateArgs>
  ): Promise<FailedJob> {
    return this.prisma.failedJob.update<T>(args);
  }
  async deleteFailedJob<T extends Prisma.FailedJobDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FailedJobDeleteArgs>
  ): Promise<FailedJob> {
    return this.prisma.failedJob.delete(args);
  }
}
