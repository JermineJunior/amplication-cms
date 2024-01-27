import { BigIntFilter } from "../../util/BigIntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type EnterpriseWhereInput = {
  academicyearsId?: BigIntFilter;
  createdAt?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: BigIntFilter;
  name?: StringFilter;
  shortName?: StringFilter;
  status?: BooleanNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
