import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PasswordResetResolverBase } from "./base/passwordReset.resolver.base";
import { PasswordReset } from "./base/PasswordReset";
import { PasswordResetService } from "./passwordReset.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PasswordReset)
export class PasswordResetResolver extends PasswordResetResolverBase {
  constructor(
    protected readonly service: PasswordResetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
