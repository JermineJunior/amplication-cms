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
import { ParentController } from "../parent.controller";
import { ParentService } from "../parent.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  academicyearsId: 42242424,
  createdAt: new Date(),
  email: "exampleEmail",
  emailVerifiedAt: new Date(),
  id: 42242424,
  name: "exampleName",
  parentAddress: "exampleParentAddress",
  parentHouseNumber: "exampleParentHouseNumber",
  parentProfession: "exampleParentProfession",
  password: "examplePassword",
  phoneNumber: "examplePhoneNumber",
  rememberToken: "exampleRememberToken",
  serialCode: "exampleSerialCode",
  updatedAt: new Date(),
  whatsappNumber: "exampleWhatsappNumber",
};
const CREATE_RESULT = {
  academicyearsId: 42242424,
  createdAt: new Date(),
  email: "exampleEmail",
  emailVerifiedAt: new Date(),
  id: 42242424,
  name: "exampleName",
  parentAddress: "exampleParentAddress",
  parentHouseNumber: "exampleParentHouseNumber",
  parentProfession: "exampleParentProfession",
  password: "examplePassword",
  phoneNumber: "examplePhoneNumber",
  rememberToken: "exampleRememberToken",
  serialCode: "exampleSerialCode",
  updatedAt: new Date(),
  whatsappNumber: "exampleWhatsappNumber",
};
const FIND_MANY_RESULT = [
  {
    academicyearsId: 42242424,
    createdAt: new Date(),
    email: "exampleEmail",
    emailVerifiedAt: new Date(),
    id: 42242424,
    name: "exampleName",
    parentAddress: "exampleParentAddress",
    parentHouseNumber: "exampleParentHouseNumber",
    parentProfession: "exampleParentProfession",
    password: "examplePassword",
    phoneNumber: "examplePhoneNumber",
    rememberToken: "exampleRememberToken",
    serialCode: "exampleSerialCode",
    updatedAt: new Date(),
    whatsappNumber: "exampleWhatsappNumber",
  },
];
const FIND_ONE_RESULT = {
  academicyearsId: 42242424,
  createdAt: new Date(),
  email: "exampleEmail",
  emailVerifiedAt: new Date(),
  id: 42242424,
  name: "exampleName",
  parentAddress: "exampleParentAddress",
  parentHouseNumber: "exampleParentHouseNumber",
  parentProfession: "exampleParentProfession",
  password: "examplePassword",
  phoneNumber: "examplePhoneNumber",
  rememberToken: "exampleRememberToken",
  serialCode: "exampleSerialCode",
  updatedAt: new Date(),
  whatsappNumber: "exampleWhatsappNumber",
};

const service = {
  createParent() {
    return CREATE_RESULT;
  },
  parents: () => FIND_MANY_RESULT,
  parent: ({ where }: { where: { id: string } }) => {
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

describe("Parent", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ParentService,
          useValue: service,
        },
      ],
      controllers: [ParentController],
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

  test("POST /parents", async () => {
    await request(app.getHttpServer())
      .post("/parents")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        emailVerifiedAt: CREATE_RESULT.emailVerifiedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /parents", async () => {
    await request(app.getHttpServer())
      .get("/parents")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          emailVerifiedAt: FIND_MANY_RESULT[0].emailVerifiedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /parents/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/parents"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /parents/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/parents"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        emailVerifiedAt: FIND_ONE_RESULT.emailVerifiedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /parents existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/parents")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        emailVerifiedAt: CREATE_RESULT.emailVerifiedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/parents")
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
