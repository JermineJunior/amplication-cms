import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FailedJobModuleBase } from "./base/failedJob.module.base";
import { FailedJobService } from "./failedJob.service";
import { FailedJobController } from "./failedJob.controller";
import { FailedJobResolver } from "./failedJob.resolver";

@Module({
  imports: [FailedJobModuleBase, forwardRef(() => AuthModule)],
  controllers: [FailedJobController],
  providers: [FailedJobService, FailedJobResolver],
  exports: [FailedJobService],
})
export class FailedJobModule {}
