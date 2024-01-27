import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClassroomService } from "./classroom.service";
import { ClassroomControllerBase } from "./base/classroom.controller.base";

@swagger.ApiTags("classrooms")
@common.Controller("classrooms")
export class ClassroomController extends ClassroomControllerBase {
  constructor(
    protected readonly service: ClassroomService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
