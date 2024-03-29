/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, UserModel } from "@prisma/client";

export class UserModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UserModelCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserModelCountArgs>
  ): Promise<number> {
    return this.prisma.userModel.count(args);
  }

  async userModels<T extends Prisma.UserModelFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserModelFindManyArgs>
  ): Promise<UserModel[]> {
    return this.prisma.userModel.findMany(args);
  }
  async userModel<T extends Prisma.UserModelFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserModelFindUniqueArgs>
  ): Promise<UserModel | null> {
    return this.prisma.userModel.findUnique(args);
  }
  async createUserModel<T extends Prisma.UserModelCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserModelCreateArgs>
  ): Promise<UserModel> {
    return this.prisma.userModel.create<T>(args);
  }
  async updateUserModel<T extends Prisma.UserModelUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserModelUpdateArgs>
  ): Promise<UserModel> {
    return this.prisma.userModel.update<T>(args);
  }
  async deleteUserModel<T extends Prisma.UserModelDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserModelDeleteArgs>
  ): Promise<UserModel> {
    return this.prisma.userModel.delete(args);
  }
}
