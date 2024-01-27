import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TeachersPaymentService } from "./teachersPayment.service";
import { TeachersPaymentControllerBase } from "./base/teachersPayment.controller.base";

@swagger.ApiTags("teachersPayments")
@common.Controller("teachersPayments")
export class TeachersPaymentController extends TeachersPaymentControllerBase {
  constructor(
    protected readonly service: TeachersPaymentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
