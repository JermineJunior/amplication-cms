import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MigrationModuleBase } from "./base/migration.module.base";
import { MigrationService } from "./migration.service";
import { MigrationController } from "./migration.controller";
import { MigrationResolver } from "./migration.resolver";

@Module({
  imports: [MigrationModuleBase, forwardRef(() => AuthModule)],
  controllers: [MigrationController],
  providers: [MigrationService, MigrationResolver],
  exports: [MigrationService],
})
export class MigrationModule {}
