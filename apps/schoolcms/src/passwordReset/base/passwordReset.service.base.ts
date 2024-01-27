/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PasswordReset } from "@prisma/client";

export class PasswordResetServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PasswordResetCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.PasswordResetCountArgs>
  ): Promise<number> {
    return this.prisma.passwordReset.count(args);
  }

  async passwordResets<T extends Prisma.PasswordResetFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PasswordResetFindManyArgs>
  ): Promise<PasswordReset[]> {
    return this.prisma.passwordReset.findMany(args);
  }
  async passwordReset<T extends Prisma.PasswordResetFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PasswordResetFindUniqueArgs>
  ): Promise<PasswordReset | null> {
    return this.prisma.passwordReset.findUnique(args);
  }
  async createPasswordReset<T extends Prisma.PasswordResetCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PasswordResetCreateArgs>
  ): Promise<PasswordReset> {
    return this.prisma.passwordReset.create<T>(args);
  }
  async updatePasswordReset<T extends Prisma.PasswordResetUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PasswordResetUpdateArgs>
  ): Promise<PasswordReset> {
    return this.prisma.passwordReset.update<T>(args);
  }
  async deletePasswordReset<T extends Prisma.PasswordResetDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PasswordResetDeleteArgs>
  ): Promise<PasswordReset> {
    return this.prisma.passwordReset.delete(args);
  }
}
