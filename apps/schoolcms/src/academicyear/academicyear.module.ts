import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AcademicyearModuleBase } from "./base/academicyear.module.base";
import { AcademicyearService } from "./academicyear.service";
import { AcademicyearController } from "./academicyear.controller";
import { AcademicyearResolver } from "./academicyear.resolver";

@Module({
  imports: [AcademicyearModuleBase, forwardRef(() => AuthModule)],
  controllers: [AcademicyearController],
  providers: [AcademicyearService, AcademicyearResolver],
  exports: [AcademicyearService],
})
export class AcademicyearModule {}
