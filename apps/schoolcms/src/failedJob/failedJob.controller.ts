import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FailedJobService } from "./failedJob.service";
import { FailedJobControllerBase } from "./base/failedJob.controller.base";

@swagger.ApiTags("failedJobs")
@common.Controller("failedJobs")
export class FailedJobController extends FailedJobControllerBase {
  constructor(
    protected readonly service: FailedJobService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
