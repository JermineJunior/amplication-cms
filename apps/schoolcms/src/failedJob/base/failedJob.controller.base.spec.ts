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
import { FailedJobController } from "../failedJob.controller";
import { FailedJobService } from "../failedJob.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  connection: "exampleConnection",
  exception: "exampleException",
  failedAt: new Date(),
  id: 42242424,
  payload: "examplePayload",
  queue: "exampleQueue",
  uuid: "exampleUuid",
};
const CREATE_RESULT = {
  connection: "exampleConnection",
  exception: "exampleException",
  failedAt: new Date(),
  id: 42242424,
  payload: "examplePayload",
  queue: "exampleQueue",
  uuid: "exampleUuid",
};
const FIND_MANY_RESULT = [
  {
    connection: "exampleConnection",
    exception: "exampleException",
    failedAt: new Date(),
    id: 42242424,
    payload: "examplePayload",
    queue: "exampleQueue",
    uuid: "exampleUuid",
  },
];
const FIND_ONE_RESULT = {
  connection: "exampleConnection",
  exception: "exampleException",
  failedAt: new Date(),
  id: 42242424,
  payload: "examplePayload",
  queue: "exampleQueue",
  uuid: "exampleUuid",
};

const service = {
  createFailedJob() {
    return CREATE_RESULT;
  },
  failedJobs: () => FIND_MANY_RESULT,
  failedJob: ({ where }: { where: { id: string } }) => {
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

describe("FailedJob", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FailedJobService,
          useValue: service,
        },
      ],
      controllers: [FailedJobController],
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

  test("POST /failedJobs", async () => {
    await request(app.getHttpServer())
      .post("/failedJobs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        failedAt: CREATE_RESULT.failedAt.toISOString(),
      });
  });

  test("GET /failedJobs", async () => {
    await request(app.getHttpServer())
      .get("/failedJobs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          failedAt: FIND_MANY_RESULT[0].failedAt.toISOString(),
        },
      ]);
  });

  test("GET /failedJobs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/failedJobs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /failedJobs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/failedJobs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        failedAt: FIND_ONE_RESULT.failedAt.toISOString(),
      });
  });

  test("POST /failedJobs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/failedJobs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        failedAt: CREATE_RESULT.failedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/failedJobs")
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
