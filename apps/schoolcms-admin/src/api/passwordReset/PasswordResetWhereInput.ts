import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PasswordResetWhereInput = {
  createdAt?: DateTimeNullableFilter;
  email?: StringFilter;
  id?: StringFilter;
  token?: StringFilter;
};
