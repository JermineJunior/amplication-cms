import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TeachersAttendeeResolverBase } from "./base/teachersAttendee.resolver.base";
import { TeachersAttendee } from "./base/TeachersAttendee";
import { TeachersAttendeeService } from "./teachersAttendee.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TeachersAttendee)
export class TeachersAttendeeResolver extends TeachersAttendeeResolverBase {
  constructor(
    protected readonly service: TeachersAttendeeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
