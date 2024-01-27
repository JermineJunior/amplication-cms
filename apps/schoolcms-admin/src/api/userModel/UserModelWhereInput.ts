import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserModelWhereInput = {
  createdAt?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  emailVerifiedAt?: DateTimeNullableFilter;
  id?: BigIntFilter;
  name?: StringFilter;
  password?: StringFilter;
  rememberToken?: StringNullableFilter;
  serialCode?: StringFilter;
  updatedAt?: DateTimeNullableFilter;
};
