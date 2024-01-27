import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { StringFilter } from "../../util/StringFilter";

export type PersonalAccessTokenWhereInput = {
  abilities?: StringNullableFilter;
  createdAt?: DateTimeNullableFilter;
  expiresAt?: DateTimeNullableFilter;
  id?: BigIntFilter;
  lastUsedAt?: DateTimeNullableFilter;
  name?: StringFilter;
  token?: StringFilter;
  tokenableId?: BigIntFilter;
  tokenableType?: StringFilter;
  updatedAt?: DateTimeNullableFilter;
};
