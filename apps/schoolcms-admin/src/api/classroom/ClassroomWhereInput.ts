import { BigIntFilter } from "../../util/BigIntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClassroomWhereInput = {
  academicyearsId?: BigIntFilter;
  createdAt?: DateTimeNullableFilter;
  enterprisesId?: BigIntFilter;
  id?: BigIntFilter;
  name?: StringFilter;
  shortName?: StringFilter;
  updatedAt?: DateTimeNullableFilter;
};
