import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ParentModuleBase } from "./base/parent.module.base";
import { ParentService } from "./parent.service";
import { ParentController } from "./parent.controller";
import { ParentResolver } from "./parent.resolver";

@Module({
  imports: [ParentModuleBase, forwardRef(() => AuthModule)],
  controllers: [ParentController],
  providers: [ParentService, ParentResolver],
  exports: [ParentService],
})
export class ParentModule {}
