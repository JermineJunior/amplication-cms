import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AcademicyearResolverBase } from "./base/academicyear.resolver.base";
import { Academicyear } from "./base/Academicyear";
import { AcademicyearService } from "./academicyear.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Academicyear)
export class AcademicyearResolver extends AcademicyearResolverBase {
  constructor(
    protected readonly service: AcademicyearService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
