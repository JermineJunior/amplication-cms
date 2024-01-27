import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PersonalAccessTokenService } from "./personalAccessToken.service";
import { PersonalAccessTokenControllerBase } from "./base/personalAccessToken.controller.base";

@swagger.ApiTags("personalAccessTokens")
@common.Controller("personalAccessTokens")
export class PersonalAccessTokenController extends PersonalAccessTokenControllerBase {
  constructor(
    protected readonly service: PersonalAccessTokenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
