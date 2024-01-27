import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TeacherModuleBase } from "./base/teacher.module.base";
import { TeacherService } from "./teacher.service";
import { TeacherController } from "./teacher.controller";
import { TeacherResolver } from "./teacher.resolver";

@Module({
  imports: [TeacherModuleBase, forwardRef(() => AuthModule)],
  controllers: [TeacherController],
  providers: [TeacherService, TeacherResolver],
  exports: [TeacherService],
})
export class TeacherModule {}
