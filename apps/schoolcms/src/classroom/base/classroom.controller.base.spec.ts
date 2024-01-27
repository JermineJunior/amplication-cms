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
import { ClassroomController } from "../classroom.controller";
import { ClassroomService } from "../classroom.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  academicyearsId: 42242424,
  createdAt: new Date(),
  enterprisesId: 42242424,
  id: 42242424,
  name: "exampleName",
  shortName: "exampleShortName",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  academicyearsId: 42242424,
  createdAt: new Date(),
  enterprisesId: 42242424,
  id: 42242424,
  name: "exampleName",
  shortName: "exampleShortName",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    academicyearsId: 42242424,
    createdAt: new Date(),
    enterprisesId: 42242424,
    id: 42242424,
    name: "exampleName",
    shortName: "exampleShortName",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  academicyearsId: 42242424,
  createdAt: new Date(),
  enterprisesId: 42242424,
  id: 42242424,
  name: "exampleName",
  shortName: "exampleShortName",
  updatedAt: new Date(),
};

const service = {
  createClassroom() {
    return CREATE_RESULT;
  },
  classrooms: () => FIND_MANY_RESULT,
  classroom: ({ where }: { where: { id: string } }) => {
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

describe("Classroom", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ClassroomService,
          useValue: service,
        },
      ],
      controllers: [ClassroomController],
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

  test("POST /classrooms", async () => {
    await request(app.getHttpServer())
      .post("/classrooms")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /classrooms", async () => {
    await request(app.getHttpServer())
      .get("/classrooms")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /classrooms/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/classrooms"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /classrooms/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/classrooms"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /classrooms existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/classrooms")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/classrooms")
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
