import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { TeacherController } from "../teacher.controller";
import { TeacherService } from "../teacher.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  academicyearsId: 42242424,
  baseSalary: 42.42,
  createdAt: new Date(),
  dateOfBirth: new Date(),
  dateOfContract: new Date(),
  email: "exampleEmail",
  emailVerifiedAt: new Date(),
  id: 42242424,
  living: "exampleLiving",
  name: "exampleName",
  password: "examplePassword",
  phoneNumber: "examplePhoneNumber",
  qualification: "exampleQualification",
  rememberToken: "exampleRememberToken",
  serialCode: "exampleSerialCode",
  specialization: "exampleSpecialization",
  updatedAt: new Date(),
  whatsappNumber: "exampleWhatsappNumber",
};
const CREATE_RESULT = {
  academicyearsId: 42242424,
  baseSalary: 42.42,
  createdAt: new Date(),
  dateOfBirth: new Date(),
  dateOfContract: new Date(),
  email: "exampleEmail",
  emailVerifiedAt: new Date(),
  id: 42242424,
  living: "exampleLiving",
  name: "exampleName",
  password: "examplePassword",
  phoneNumber: "examplePhoneNumber",
  qualification: "exampleQualification",
  rememberToken: "exampleRememberToken",
  serialCode: "exampleSerialCode",
  specialization: "exampleSpecialization",
  updatedAt: new Date(),
  whatsappNumber: "exampleWhatsappNumber",
};
const FIND_MANY_RESULT = [
  {
    academicyearsId: 42242424,
    baseSalary: 42.42,
    createdAt: new Date(),
    dateOfBirth: new Date(),
    dateOfContract: new Date(),
    email: "exampleEmail",
    emailVerifiedAt: new Date(),
    id: 42242424,
    living: "exampleLiving",
    name: "exampleName",
    password: "examplePassword",
    phoneNumber: "examplePhoneNumber",
    qualification: "exampleQualification",
    rememberToken: "exampleRememberToken",
    serialCode: "exampleSerialCode",
    specialization: "exampleSpecialization",
    updatedAt: new Date(),
    whatsappNumber: "exampleWhatsappNumber",
  },
];
const FIND_ONE_RESULT = {
  academicyearsId: 42242424,
  baseSalary: 42.42,
  createdAt: new Date(),
  dateOfBirth: new Date(),
  dateOfContract: new Date(),
  email: "exampleEmail",
  emailVerifiedAt: new Date(),
  id: 42242424,
  living: "exampleLiving",
  name: "exampleName",
  password: "examplePassword",
  phoneNumber: "examplePhoneNumber",
  qualification: "exampleQualification",
  rememberToken: "exampleRememberToken",
  serialCode: "exampleSerialCode",
  specialization: "exampleSpecialization",
  updatedAt: new Date(),
  whatsappNumber: "exampleWhatsappNumber",
};

const service = {
  createTeacher() {
    return CREATE_RESULT;
  },
  teachers: () => FIND_MANY_RESULT,
  teacher: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Teacher", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TeacherService,
          useValue: service,
        },
      ],
      controllers: [TeacherController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /teachers", async () => {
    await request(app.getHttpServer())
      .post("/teachers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateOfBirth: CREATE_RESULT.dateOfBirth.toISOString(),
        dateOfContract: CREATE_RESULT.dateOfContract.toISOString(),
        emailVerifiedAt: CREATE_RESULT.emailVerifiedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /teachers", async () => {
    await request(app.getHttpServer())
      .get("/teachers")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateOfBirth: FIND_MANY_RESULT[0].dateOfBirth.toISOString(),
          dateOfContract: FIND_MANY_RESULT[0].dateOfContract.toISOString(),
          emailVerifiedAt: FIND_MANY_RESULT[0].emailVerifiedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /teachers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/teachers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /teachers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/teachers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateOfBirth: FIND_ONE_RESULT.dateOfBirth.toISOString(),
        dateOfContract: FIND_ONE_RESULT.dateOfContract.toISOString(),
        emailVerifiedAt: FIND_ONE_RESULT.emailVerifiedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /teachers existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/teachers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateOfBirth: CREATE_RESULT.dateOfBirth.toISOString(),
        dateOfContract: CREATE_RESULT.dateOfContract.toISOString(),
        emailVerifiedAt: CREATE_RESULT.emailVerifiedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/teachers")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
