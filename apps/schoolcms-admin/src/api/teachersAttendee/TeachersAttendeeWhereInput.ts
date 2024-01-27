import { BigIntFilter } from "../../util/BigIntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type TeachersAttendeeWhereInput = {
  academicyearsId?: BigIntFilter;
  createdAt?: DateTimeNullableFilter;
  date?: DateTimeFilter;
  id?: BigIntFilter;
  teacherId?: BigIntFilter;
  timeOfAttendance?: DateTimeNullableFilter;
  timeOfDeparture?: DateTimeNullableFilter;
  type?: "presence" | "absence";
  updatedAt?: DateTimeNullableFilter;
};
