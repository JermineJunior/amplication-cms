import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AcademicperiodResolverBase } from "./base/academicperiod.resolver.base";
import { Academicperiod } from "./base/Academicperiod";
import { AcademicperiodService } from "./academicperiod.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Academicperiod)
export class AcademicperiodResolver extends AcademicperiodResolverBase {
  constructor(
    protected readonly service: AcademicperiodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
