import { BigIntFilter } from "../../util/BigIntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SubjectWhereInput = {
  academicyearsId?: BigIntFilter;
  classroomId?: BigIntFilter;
  createdAt?: DateTimeNullableFilter;
  fullDegree?: IntNullableFilter;
  id?: BigIntFilter;
  name?: StringFilter;
  updatedAt?: DateTimeNullableFilter;
};
