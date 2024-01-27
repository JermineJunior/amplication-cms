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
import { AcademicyearController } from "../academicyear.controller";
import { AcademicyearService } from "../academicyear.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  description: "exampleDescription",
  id: 42242424,
  name: "exampleName",
  status: "true",
  updatedAt: new Date(),
  yearEnd: new Date(),
  yearStart: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  description: "exampleDescription",
  id: 42242424,
  name: "exampleName",
  status: "true",
  updatedAt: new Date(),
  yearEnd: new Date(),
  yearStart: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    description: "exampleDescription",
    id: 42242424,
    name: "exampleName",
    status: "true",
    updatedAt: new Date(),
    yearEnd: new Date(),
    yearStart: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  description: "exampleDescription",
  id: 42242424,
  name: "exampleName",
  status: "true",
  updatedAt: new Date(),
  yearEnd: new Date(),
  yearStart: new Date(),
};

const service = {
  createAcademicyear() {
    return CREATE_RESULT;
  },
  academicyears: () => FIND_MANY_RESULT,
  academicyear: ({ where }: { where: { id: string } }) => {
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

describe("Academicyear", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AcademicyearService,
          useValue: service,
        },
      ],
      controllers: [AcademicyearController],
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

  test("POST /academicyears", async () => {
    await request(app.getHttpServer())
      .post("/academicyears")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        yearEnd: CREATE_RESULT.yearEnd.toISOString(),
        yearStart: CREATE_RESULT.yearStart.toISOString(),
      });
  });

  test("GET /academicyears", async () => {
    await request(app.getHttpServer())
      .get("/academicyears")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          yearEnd: FIND_MANY_RESULT[0].yearEnd.toISOString(),
          yearStart: FIND_MANY_RESULT[0].yearStart.toISOString(),
        },
      ]);
  });

  test("GET /academicyears/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/academicyears"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /academicyears/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/academicyears"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        yearEnd: FIND_ONE_RESULT.yearEnd.toISOString(),
        yearStart: FIND_ONE_RESULT.yearStart.toISOString(),
      });
  });

  test("POST /academicyears existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/academicyears")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        yearEnd: CREATE_RESULT.yearEnd.toISOString(),
        yearStart: CREATE_RESULT.yearStart.toISOString(),
      })
      .then(function () {
        agent
          .post("/academicyears")
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
