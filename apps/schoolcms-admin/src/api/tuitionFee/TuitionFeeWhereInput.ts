import { BigIntFilter } from "../../util/BigIntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type TuitionFeeWhereInput = {
  academicyearsId?: BigIntFilter;
  createdAt?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: BigIntFilter;
  payment?: IntFilter;
  paymentDate?: DateTimeFilter;
  studentId?: BigIntFilter;
  updatedAt?: DateTimeNullableFilter;
};
