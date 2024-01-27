import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StudentModuleBase } from "./base/student.module.base";
import { StudentService } from "./student.service";
import { StudentController } from "./student.controller";
import { StudentResolver } from "./student.resolver";

@Module({
  imports: [StudentModuleBase, forwardRef(() => AuthModule)],
  controllers: [StudentController],
  providers: [StudentService, StudentResolver],
  exports: [StudentService],
})
export class StudentModule {}
