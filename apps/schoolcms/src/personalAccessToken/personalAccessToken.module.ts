import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PersonalAccessTokenModuleBase } from "./base/personalAccessToken.module.base";
import { PersonalAccessTokenService } from "./personalAccessToken.service";
import { PersonalAccessTokenController } from "./personalAccessToken.controller";
import { PersonalAccessTokenResolver } from "./personalAccessToken.resolver";

@Module({
  imports: [PersonalAccessTokenModuleBase, forwardRef(() => AuthModule)],
  controllers: [PersonalAccessTokenController],
  providers: [PersonalAccessTokenService, PersonalAccessTokenResolver],
  exports: [PersonalAccessTokenService],
})
export class PersonalAccessTokenModule {}
