import { ClassroomWhereInput } from "./ClassroomWhereInput";
import { ClassroomOrderByInput } from "./ClassroomOrderByInput";

export type ClassroomFindManyArgs = {
  where?: ClassroomWhereInput;
  orderBy?: Array<ClassroomOrderByInput>;
  skip?: number;
  take?: number;
};
