import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EnterpriseService } from "./enterprise.service";
import { EnterpriseControllerBase } from "./base/enterprise.controller.base";

@swagger.ApiTags("enterprises")
@common.Controller("enterprises")
export class EnterpriseController extends EnterpriseControllerBase {
  constructor(
    protected readonly service: EnterpriseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
