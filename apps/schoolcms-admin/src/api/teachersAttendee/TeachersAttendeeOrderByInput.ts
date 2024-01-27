import { SortOrder } from "../../util/SortOrder";

export type TeachersAttendeeOrderByInput = {
  academicyearsId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  teacherId?: SortOrder;
  timeOfAttendance?: SortOrder;
  timeOfDeparture?: SortOrder;
  type?: SortOrder;
  updatedAt?: SortOrder;
};
