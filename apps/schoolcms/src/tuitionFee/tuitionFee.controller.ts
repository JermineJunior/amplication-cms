import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TuitionFeeService } from "./tuitionFee.service";
import { TuitionFeeControllerBase } from "./base/tuitionFee.controller.base";

@swagger.ApiTags("tuitionFees")
@common.Controller("tuitionFees")
export class TuitionFeeController extends TuitionFeeControllerBase {
  constructor(
    protected readonly service: TuitionFeeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
