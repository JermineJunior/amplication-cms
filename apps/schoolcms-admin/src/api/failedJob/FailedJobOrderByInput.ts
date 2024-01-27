import { SortOrder } from "../../util/SortOrder";

export type FailedJobOrderByInput = {
  connection?: SortOrder;
  exception?: SortOrder;
  failedAt?: SortOrder;
  id?: SortOrder;
  payload?: SortOrder;
  queue?: SortOrder;
  uuid?: SortOrder;
};
