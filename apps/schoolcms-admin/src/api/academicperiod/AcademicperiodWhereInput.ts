import { BigIntFilter } from "../../util/BigIntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type AcademicperiodWhereInput = {
  academicyearsId?: BigIntFilter;
  createdAt?: DateTimeNullableFilter;
  dayCount?: IntFilter;
  description?: StringNullableFilter;
  id?: BigIntFilter;
  name?: StringFilter;
  periodEnd?: DateTimeFilter;
  periodStart?: DateTimeFilter;
  updatedAt?: DateTimeNullableFilter;
};
