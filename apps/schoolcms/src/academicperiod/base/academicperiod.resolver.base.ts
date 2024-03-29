/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Academicperiod } from "./Academicperiod";
import { AcademicperiodCountArgs } from "./AcademicperiodCountArgs";
import { AcademicperiodFindManyArgs } from "./AcademicperiodFindManyArgs";
import { AcademicperiodFindUniqueArgs } from "./AcademicperiodFindUniqueArgs";
import { CreateAcademicperiodArgs } from "./CreateAcademicperiodArgs";
import { UpdateAcademicperiodArgs } from "./UpdateAcademicperiodArgs";
import { DeleteAcademicperiodArgs } from "./DeleteAcademicperiodArgs";
import { AcademicperiodService } from "../academicperiod.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Academicperiod)
export class AcademicperiodResolverBase {
  constructor(
    protected readonly service: AcademicperiodService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Academicperiod",
    action: "read",
    possession: "any",
  })
  async _academicperiodsMeta(
    @graphql.Args() args: AcademicperiodCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Academicperiod])
  @nestAccessControl.UseRoles({
    resource: "Academicperiod",
    action: "read",
    possession: "any",
  })
  async academicperiods(
    @graphql.Args() args: AcademicperiodFindManyArgs
  ): Promise<Academicperiod[]> {
    return this.service.academicperiods(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Academicperiod, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Academicperiod",
    action: "read",
    possession: "own",
  })
  async academicperiod(
    @graphql.Args() args: AcademicperiodFindUniqueArgs
  ): Promise<Academicperiod | null> {
    const result = await this.service.academicperiod(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Academicperiod)
  @nestAccessControl.UseRoles({
    resource: "Academicperiod",
    action: "create",
    possession: "any",
  })
  async createAcademicperiod(
    @graphql.Args() args: CreateAcademicperiodArgs
  ): Promise<Academicperiod> {
    return await this.service.createAcademicperiod({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Academicperiod)
  @nestAccessControl.UseRoles({
    resource: "Academicperiod",
    action: "update",
    possession: "any",
  })
  async updateAcademicperiod(
    @graphql.Args() args: UpdateAcademicperiodArgs
  ): Promise<Academicperiod | null> {
    try {
      return await this.service.updateAcademicperiod({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Academicperiod)
  @nestAccessControl.UseRoles({
    resource: "Academicperiod",
    action: "delete",
    possession: "any",
  })
  async deleteAcademicperiod(
    @graphql.Args() args: DeleteAcademicperiodArgs
  ): Promise<Academicperiod | null> {
    try {
      return await this.service.deleteAcademicperiod(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
