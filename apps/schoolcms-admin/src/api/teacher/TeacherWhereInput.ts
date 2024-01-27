import { BigIntFilter } from "../../util/BigIntFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TeacherWhereInput = {
  academicyearsId?: BigIntFilter;
  baseSalary?: FloatNullableFilter;
  createdAt?: DateTimeNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  dateOfContract?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  emailVerifiedAt?: DateTimeNullableFilter;
  id?: BigIntFilter;
  living?: StringNullableFilter;
  name?: StringFilter;
  password?: StringFilter;
  phoneNumber?: StringNullableFilter;
  qualification?: StringNullableFilter;
  rememberToken?: StringNullableFilter;
  serialCode?: StringFilter;
  specialization?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  whatsappNumber?: StringNullableFilter;
};
