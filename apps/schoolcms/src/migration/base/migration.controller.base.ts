/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MigrationService } from "../migration.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MigrationCreateInput } from "./MigrationCreateInput";
import { Migration } from "./Migration";
import { MigrationFindManyArgs } from "./MigrationFindManyArgs";
import { MigrationWhereUniqueInput } from "./MigrationWhereUniqueInput";
import { MigrationUpdateInput } from "./MigrationUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MigrationControllerBase {
  constructor(
    protected readonly service: MigrationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Migration })
  @nestAccessControl.UseRoles({
    resource: "Migration",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMigration(
    @common.Body() data: MigrationCreateInput
  ): Promise<Migration> {
    return await this.service.createMigration({
      data: data,
      select: {
        batch: true,
        id: true,
        migration: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Migration] })
  @ApiNestedQuery(MigrationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Migration",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async migrations(@common.Req() request: Request): Promise<Migration[]> {
    const args = plainToClass(MigrationFindManyArgs, request.query);
    return this.service.migrations({
      ...args,
      select: {
        batch: true,
        id: true,
        migration: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Migration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Migration",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async migration(
    @common.Param() params: MigrationWhereUniqueInput
  ): Promise<Migration | null> {
    const result = await this.service.migration({
      where: params,
      select: {
        batch: true,
        id: true,
        migration: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Migration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Migration",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMigration(
    @common.Param() params: MigrationWhereUniqueInput,
    @common.Body() data: MigrationUpdateInput
  ): Promise<Migration | null> {
    try {
      return await this.service.updateMigration({
        where: params,
        data: data,
        select: {
          batch: true,
          id: true,
          migration: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Migration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Migration",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMigration(
    @common.Param() params: MigrationWhereUniqueInput
  ): Promise<Migration | null> {
    try {
      return await this.service.deleteMigration({
        where: params,
        select: {
          batch: true,
          id: true,
          migration: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}