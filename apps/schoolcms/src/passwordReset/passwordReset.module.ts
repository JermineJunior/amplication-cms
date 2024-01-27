import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PasswordResetModuleBase } from "./base/passwordReset.module.base";
import { PasswordResetService } from "./passwordReset.service";
import { PasswordResetController } from "./passwordReset.controller";
import { PasswordResetResolver } from "./passwordReset.resolver";

@Module({
  imports: [PasswordResetModuleBase, forwardRef(() => AuthModule)],
  controllers: [PasswordResetController],
  providers: [PasswordResetService, PasswordResetResolver],
  exports: [PasswordResetService],
})
export class PasswordResetModule {}
