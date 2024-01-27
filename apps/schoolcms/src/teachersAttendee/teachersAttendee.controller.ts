import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TeachersAttendeeService } from "./teachersAttendee.service";
import { TeachersAttendeeControllerBase } from "./base/teachersAttendee.controller.base";

@swagger.ApiTags("teachersAttendees")
@common.Controller("teachersAttendees")
export class TeachersAttendeeController extends TeachersAttendeeControllerBase {
  constructor(
    protected readonly service: TeachersAttendeeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
