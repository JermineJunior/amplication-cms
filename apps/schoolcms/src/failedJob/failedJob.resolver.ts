import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FailedJobResolverBase } from "./base/failedJob.resolver.base";
import { FailedJob } from "./base/FailedJob";
import { FailedJobService } from "./failedJob.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FailedJob)
export class FailedJobResolver extends FailedJobResolverBase {
  constructor(
    protected readonly service: FailedJobService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
