import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TeachersPaymentModuleBase } from "./base/teachersPayment.module.base";
import { TeachersPaymentService } from "./teachersPayment.service";
import { TeachersPaymentController } from "./teachersPayment.controller";
import { TeachersPaymentResolver } from "./teachersPayment.resolver";

@Module({
  imports: [TeachersPaymentModuleBase, forwardRef(() => AuthModule)],
  controllers: [TeachersPaymentController],
  providers: [TeachersPaymentService, TeachersPaymentResolver],
  exports: [TeachersPaymentService],
})
export class TeachersPaymentModule {}
