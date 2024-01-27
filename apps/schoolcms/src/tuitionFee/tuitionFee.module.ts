import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TuitionFeeModuleBase } from "./base/tuitionFee.module.base";
import { TuitionFeeService } from "./tuitionFee.service";
import { TuitionFeeController } from "./tuitionFee.controller";
import { TuitionFeeResolver } from "./tuitionFee.resolver";

@Module({
  imports: [TuitionFeeModuleBase, forwardRef(() => AuthModule)],
  controllers: [TuitionFeeController],
  providers: [TuitionFeeService, TuitionFeeResolver],
  exports: [TuitionFeeService],
})
export class TuitionFeeModule {}
