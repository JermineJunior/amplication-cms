import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PasswordResetService } from "./passwordReset.service";
import { PasswordResetControllerBase } from "./base/passwordReset.controller.base";

@swagger.ApiTags("passwordResets")
@common.Controller("passwordResets")
export class PasswordResetController extends PasswordResetControllerBase {
  constructor(
    protected readonly service: PasswordResetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
