import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TeachersAttendeeModuleBase } from "./base/teachersAttendee.module.base";
import { TeachersAttendeeService } from "./teachersAttendee.service";
import { TeachersAttendeeController } from "./teachersAttendee.controller";
import { TeachersAttendeeResolver } from "./teachersAttendee.resolver";

@Module({
  imports: [TeachersAttendeeModuleBase, forwardRef(() => AuthModule)],
  controllers: [TeachersAttendeeController],
  providers: [TeachersAttendeeService, TeachersAttendeeResolver],
  exports: [TeachersAttendeeService],
})
export class TeachersAttendeeModule {}
