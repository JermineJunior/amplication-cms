import { TeachersAttendeeWhereInput } from "./TeachersAttendeeWhereInput";
import { TeachersAttendeeOrderByInput } from "./TeachersAttendeeOrderByInput";

export type TeachersAttendeeFindManyArgs = {
  where?: TeachersAttendeeWhereInput;
  orderBy?: Array<TeachersAttendeeOrderByInput>;
  skip?: number;
  take?: number;
};
