import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClassroomModuleBase } from "./base/classroom.module.base";
import { ClassroomService } from "./classroom.service";
import { ClassroomController } from "./classroom.controller";
import { ClassroomResolver } from "./classroom.resolver";

@Module({
  imports: [ClassroomModuleBase, forwardRef(() => AuthModule)],
  controllers: [ClassroomController],
  providers: [ClassroomService, ClassroomResolver],
  exports: [ClassroomService],
})
export class ClassroomModule {}
