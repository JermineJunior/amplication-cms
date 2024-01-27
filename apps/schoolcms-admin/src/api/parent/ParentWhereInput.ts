import { BigIntFilter } from "../../util/BigIntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ParentWhereInput = {
  academicyearsId?: BigIntFilter;
  createdAt?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  emailVerifiedAt?: DateTimeNullableFilter;
  id?: BigIntFilter;
  name?: StringFilter;
  parentAddress?: StringNullableFilter;
  parentHouseNumber?: StringNullableFilter;
  parentProfession?: StringNullableFilter;
  password?: StringFilter;
  phoneNumber?: StringNullableFilter;
  rememberToken?: StringNullableFilter;
  serialCode?: StringFilter;
  updatedAt?: DateTimeNullableFilter;
  whatsappNumber?: StringNullableFilter;
};
