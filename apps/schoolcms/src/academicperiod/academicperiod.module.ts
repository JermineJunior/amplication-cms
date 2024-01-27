import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AcademicperiodModuleBase } from "./base/academicperiod.module.base";
import { AcademicperiodService } from "./academicperiod.service";
import { AcademicperiodController } from "./academicperiod.controller";
import { AcademicperiodResolver } from "./academicperiod.resolver";

@Module({
  imports: [AcademicperiodModuleBase, forwardRef(() => AuthModule)],
  controllers: [AcademicperiodController],
  providers: [AcademicperiodService, AcademicperiodResolver],
  exports: [AcademicperiodService],
})
export class AcademicperiodModule {}
