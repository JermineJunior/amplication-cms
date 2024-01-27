import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SubjectModuleBase } from "./base/subject.module.base";
import { SubjectService } from "./subject.service";
import { SubjectController } from "./subject.controller";
import { SubjectResolver } from "./subject.resolver";

@Module({
  imports: [SubjectModuleBase, forwardRef(() => AuthModule)],
  controllers: [SubjectController],
  providers: [SubjectService, SubjectResolver],
  exports: [SubjectService],
})
export class SubjectModule {}
