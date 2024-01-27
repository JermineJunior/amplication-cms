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
import { AcademicperiodController } from "../academicperiod.controller";
import { AcademicperiodService } from "../academicperiod.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  academicyearsId: 42242424,
  createdAt: new Date(),
  dayCount: 42,
  description: "exampleDescription",
  id: 42242424,
  name: "exampleName",
  periodEnd: new Date(),
  periodStart: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  academicyearsId: 42242424,
  createdAt: new Date(),
  dayCount: 42,
  description: "exampleDescription",
  id: 42242424,
  name: "exampleName",
  periodEnd: new Date(),
  periodStart: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    academicyearsId: 42242424,
    createdAt: new Date(),
    dayCount: 42,
    description: "exampleDescription",
    id: 42242424,
    name: "exampleName",
    periodEnd: new Date(),
    periodStart: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  academicyearsId: 42242424,
  createdAt: new Date(),
  dayCount: 42,
  description: "exampleDescription",
  id: 42242424,
  name: "exampleName",
  periodEnd: new Date(),
  periodStart: new Date(),
  updatedAt: new Date(),
};

const service = {
  createAcademicperiod() {
    return CREATE_RESULT;
  },
  academicperiods: () => FIND_MANY_RESULT,
  academicperiod: ({ where }: { where: { id: string } }) => {
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

describe("Academicperiod", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AcademicperiodService,
          useValue: service,
        },
      ],
      controllers: [AcademicperiodController],
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

  test("POST /academicperiods", async () => {
    await request(app.getHttpServer())
      .post("/academicperiods")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        periodEnd: CREATE_RESULT.periodEnd.toISOString(),
        periodStart: CREATE_RESULT.periodStart.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /academicperiods", async () => {
    await request(app.getHttpServer())
      .get("/academicperiods")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          periodEnd: FIND_MANY_RESULT[0].periodEnd.toISOString(),
          periodStart: FIND_MANY_RESULT[0].periodStart.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /academicperiods/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/academicperiods"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /academicperiods/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/academicperiods"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        periodEnd: FIND_ONE_RESULT.periodEnd.toISOString(),
        periodStart: FIND_ONE_RESULT.periodStart.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /academicperiods existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/academicperiods")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        periodEnd: CREATE_RESULT.periodEnd.toISOString(),
        periodStart: CREATE_RESULT.periodStart.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/academicperiods")
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
