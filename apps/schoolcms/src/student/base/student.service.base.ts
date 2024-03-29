/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Student } from "@prisma/client";

export class StudentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.StudentCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentCountArgs>
  ): Promise<number> {
    return this.prisma.student.count(args);
  }

  async students<T extends Prisma.StudentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentFindManyArgs>
  ): Promise<Student[]> {
    return this.prisma.student.findMany(args);
  }
  async student<T extends Prisma.StudentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentFindUniqueArgs>
  ): Promise<Student | null> {
    return this.prisma.student.findUnique(args);
  }
  async createStudent<T extends Prisma.StudentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentCreateArgs>
  ): Promise<Student> {
    return this.prisma.student.create<T>(args);
  }
  async updateStudent<T extends Prisma.StudentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentUpdateArgs>
  ): Promise<Student> {
    return this.prisma.student.update<T>(args);
  }
  async deleteStudent<T extends Prisma.StudentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentDeleteArgs>
  ): Promise<Student> {
    return this.prisma.student.delete(args);
  }
}
