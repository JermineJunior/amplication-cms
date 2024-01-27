import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EnterpriseResolverBase } from "./base/enterprise.resolver.base";
import { Enterprise } from "./base/Enterprise";
import { EnterpriseService } from "./enterprise.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Enterprise)
export class EnterpriseResolver extends EnterpriseResolverBase {
  constructor(
    protected readonly service: EnterpriseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
