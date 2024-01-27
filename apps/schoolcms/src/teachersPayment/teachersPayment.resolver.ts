import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TeachersPaymentResolverBase } from "./base/teachersPayment.resolver.base";
import { TeachersPayment } from "./base/TeachersPayment";
import { TeachersPaymentService } from "./teachersPayment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TeachersPayment)
export class TeachersPaymentResolver extends TeachersPaymentResolverBase {
  constructor(
    protected readonly service: TeachersPaymentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
