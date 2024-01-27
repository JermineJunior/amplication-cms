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
import { TeachersPaymentController } from "../teachersPayment.controller";
import { TeachersPaymentService } from "../teachersPayment.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  academicyearsId: 42242424,
  createdAt: new Date(),
  description: "exampleDescription",
  id: 42242424,
  payment: 42,
  paymentDate: new Date(),
  teacherId: 42242424,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  academicyearsId: 42242424,
  createdAt: new Date(),
  description: "exampleDescription",
  id: 42242424,
  payment: 42,
  paymentDate: new Date(),
  teacherId: 42242424,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    academicyearsId: 42242424,
    createdAt: new Date(),
    description: "exampleDescription",
    id: 42242424,
    payment: 42,
    paymentDate: new Date(),
    teacherId: 42242424,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  academicyearsId: 42242424,
  createdAt: new Date(),
  description: "exampleDescription",
  id: 42242424,
  payment: 42,
  paymentDate: new Date(),
  teacherId: 42242424,
  updatedAt: new Date(),
};

const service = {
  createTeachersPayment() {
    return CREATE_RESULT;
  },
  teachersPayments: () => FIND_MANY_RESULT,
  teachersPayment: ({ where }: { where: { id: string } }) => {
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

describe("TeachersPayment", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TeachersPaymentService,
          useValue: service,
        },
      ],
      controllers: [TeachersPaymentController],
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

  test("POST /teachersPayments", async () => {
    await request(app.getHttpServer())
      .post("/teachersPayments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        paymentDate: CREATE_RESULT.paymentDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /teachersPayments", async () => {
    await request(app.getHttpServer())
      .get("/teachersPayments")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          paymentDate: FIND_MANY_RESULT[0].paymentDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /teachersPayments/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/teachersPayments"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /teachersPayments/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/teachersPayments"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        paymentDate: FIND_ONE_RESULT.paymentDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /teachersPayments existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/teachersPayments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        paymentDate: CREATE_RESULT.paymentDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/teachersPayments")
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
