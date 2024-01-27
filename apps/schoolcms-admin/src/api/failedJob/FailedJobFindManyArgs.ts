import { FailedJobWhereInput } from "./FailedJobWhereInput";
import { FailedJobOrderByInput } from "./FailedJobOrderByInput";

export type FailedJobFindManyArgs = {
  where?: FailedJobWhereInput;
  orderBy?: Array<FailedJobOrderByInput>;
  skip?: number;
  take?: number;
};
