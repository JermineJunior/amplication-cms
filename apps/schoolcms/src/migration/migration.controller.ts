import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MigrationService } from "./migration.service";
import { MigrationControllerBase } from "./base/migration.controller.base";

@swagger.ApiTags("migrations")
@common.Controller("migrations")
export class MigrationController extends MigrationControllerBase {
  constructor(
    protected readonly service: MigrationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
