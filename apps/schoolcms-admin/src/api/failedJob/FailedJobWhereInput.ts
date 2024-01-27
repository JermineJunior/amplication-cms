import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BigIntFilter } from "../../util/BigIntFilter";

export type FailedJobWhereInput = {
  connection?: StringFilter;
  exception?: StringFilter;
  failedAt?: DateTimeFilter;
  id?: BigIntFilter;
  payload?: StringFilter;
  queue?: StringFilter;
  uuid?: StringFilter;
};
