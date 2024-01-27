import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AcademicperiodService } from "./academicperiod.service";
import { AcademicperiodControllerBase } from "./base/academicperiod.controller.base";

@swagger.ApiTags("academicperiods")
@common.Controller("academicperiods")
export class AcademicperiodController extends AcademicperiodControllerBase {
  constructor(
    protected readonly service: AcademicperiodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
