import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { AcademicperiodModule } from "./academicperiod/academicperiod.module";
import { AcademicyearModule } from "./academicyear/academicyear.module";
import { ClassroomModule } from "./classroom/classroom.module";
import { EnterpriseModule } from "./enterprise/enterprise.module";
import { FailedJobModule } from "./failedJob/failedJob.module";
import { MigrationModule } from "./migration/migration.module";
import { ParentModule } from "./parent/parent.module";
import { PasswordResetModule } from "./passwordReset/passwordReset.module";
import { PersonalAccessTokenModule } from "./personalAccessToken/personalAccessToken.module";
import { StudentModule } from "./student/student.module";
import { SubjectModule } from "./subject/subject.module";
import { TeacherModule } from "./teacher/teacher.module";
import { TeachersAttendeeModule } from "./teachersAttendee/teachersAttendee.module";
import { TeachersPaymentModule } from "./teachersPayment/teachersPayment.module";
import { TuitionFeeModule } from "./tuitionFee/tuitionFee.module";
import { UserModelModule } from "./userModel/userModel.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    AcademicperiodModule,
    AcademicyearModule,
    ClassroomModule,
    EnterpriseModule,
    FailedJobModule,
    MigrationModule,
    ParentModule,
    PasswordResetModule,
    PersonalAccessTokenModule,
    StudentModule,
    SubjectModule,
    TeacherModule,
    TeachersAttendeeModule,
    TeachersPaymentModule,
    TuitionFeeModule,
    UserModelModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
