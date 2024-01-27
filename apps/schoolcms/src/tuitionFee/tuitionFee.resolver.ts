import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TuitionFeeResolverBase } from "./base/tuitionFee.resolver.base";
import { TuitionFee } from "./base/TuitionFee";
import { TuitionFeeService } from "./tuitionFee.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TuitionFee)
export class TuitionFeeResolver extends TuitionFeeResolverBase {
  constructor(
    protected readonly service: TuitionFeeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
