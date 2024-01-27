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
import { TuitionFeeService } from "../tuitionFee.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TuitionFeeCreateInput } from "./TuitionFeeCreateInput";
import { TuitionFee } from "./TuitionFee";
import { TuitionFeeFindManyArgs } from "./TuitionFeeFindManyArgs";
import { TuitionFeeWhereUniqueInput } from "./TuitionFeeWhereUniqueInput";
import { TuitionFeeUpdateInput } from "./TuitionFeeUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TuitionFeeControllerBase {
  constructor(
    protected readonly service: TuitionFeeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TuitionFee })
  @nestAccessControl.UseRoles({
    resource: "TuitionFee",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTuitionFee(
    @common.Body() data: TuitionFeeCreateInput
  ): Promise<TuitionFee> {
    return await this.service.createTuitionFee({
      data: data,
      select: {
        academicyearsId: true,
        createdAt: true,
        description: true,
        id: true,
        payment: true,
        paymentDate: true,
        studentId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [TuitionFee] })
  @ApiNestedQuery(TuitionFeeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "TuitionFee",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async tuitionFees(@common.Req() request: Request): Promise<TuitionFee[]> {
    const args = plainToClass(TuitionFeeFindManyArgs, request.query);
    return this.service.tuitionFees({
      ...args,
      select: {
        academicyearsId: true,
        createdAt: true,
        description: true,
        id: true,
        payment: true,
        paymentDate: true,
        studentId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TuitionFee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TuitionFee",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async tuitionFee(
    @common.Param() params: TuitionFeeWhereUniqueInput
  ): Promise<TuitionFee | null> {
    const result = await this.service.tuitionFee({
      where: params,
      select: {
        academicyearsId: true,
        createdAt: true,
        description: true,
        id: true,
        payment: true,
        paymentDate: true,
        studentId: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: TuitionFee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TuitionFee",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTuitionFee(
    @common.Param() params: TuitionFeeWhereUniqueInput,
    @common.Body() data: TuitionFeeUpdateInput
  ): Promise<TuitionFee | null> {
    try {
      return await this.service.updateTuitionFee({
        where: params,
        data: data,
        select: {
          academicyearsId: true,
          createdAt: true,
          description: true,
          id: true,
          payment: true,
          paymentDate: true,
          studentId: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: TuitionFee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TuitionFee",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTuitionFee(
    @common.Param() params: TuitionFeeWhereUniqueInput
  ): Promise<TuitionFee | null> {
    try {
      return await this.service.deleteTuitionFee({
        where: params,
        select: {
          academicyearsId: true,
          createdAt: true,
          description: true,
          id: true,
          payment: true,
          paymentDate: true,
          studentId: true,
          updatedAt: true,
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