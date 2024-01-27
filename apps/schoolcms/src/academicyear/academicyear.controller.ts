import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AcademicyearService } from "./academicyear.service";
import { AcademicyearControllerBase } from "./base/academicyear.controller.base";

@swagger.ApiTags("academicyears")
@common.Controller("academicyears")
export class AcademicyearController extends AcademicyearControllerBase {
  constructor(
    protected readonly service: AcademicyearService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
