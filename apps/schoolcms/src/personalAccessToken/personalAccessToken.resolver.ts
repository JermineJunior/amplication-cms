import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PersonalAccessTokenResolverBase } from "./base/personalAccessToken.resolver.base";
import { PersonalAccessToken } from "./base/PersonalAccessToken";
import { PersonalAccessTokenService } from "./personalAccessToken.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PersonalAccessToken)
export class PersonalAccessTokenResolver extends PersonalAccessTokenResolverBase {
  constructor(
    protected readonly service: PersonalAccessTokenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
