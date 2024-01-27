import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type AcademicyearWhereInput = {
  createdAt?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: BigIntFilter;
  name?: StringFilter;
  status?: BooleanFilter;
  updatedAt?: DateTimeNullableFilter;
  yearEnd?: DateTimeFilter;
  yearStart?: DateTimeFilter;
};
