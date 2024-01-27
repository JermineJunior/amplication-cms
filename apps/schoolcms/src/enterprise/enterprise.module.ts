import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EnterpriseModuleBase } from "./base/enterprise.module.base";
import { EnterpriseService } from "./enterprise.service";
import { EnterpriseController } from "./enterprise.controller";
import { EnterpriseResolver } from "./enterprise.resolver";

@Module({
  imports: [EnterpriseModuleBase, forwardRef(() => AuthModule)],
  controllers: [EnterpriseController],
  providers: [EnterpriseService, EnterpriseResolver],
  exports: [EnterpriseService],
})
export class EnterpriseModule {}
