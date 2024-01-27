import { BigIntFilter } from "../../util/BigIntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StudentWhereInput = {
  academicyearsId?: BigIntFilter;
  amountToBePaid?: IntNullableFilter;
  classroomId?: BigIntFilter;
  createdAt?: DateTimeNullableFilter;
  enterpriseId?: BigIntFilter;
  fatherName?: StringFilter;
  gender?: "male" | "female";
  id?: BigIntFilter;
  motherName?: StringNullableFilter;
  motherPhone?: StringNullableFilter;
  name?: StringFilter;
  parentId?: BigIntFilter;
  password?: StringFilter;
  serialCode?: StringFilter;
  updatedAt?: DateTimeNullableFilter;
};
