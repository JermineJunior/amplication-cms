import { ParentWhereInput } from "./ParentWhereInput";
import { ParentOrderByInput } from "./ParentOrderByInput";

export type ParentFindManyArgs = {
  where?: ParentWhereInput;
  orderBy?: Array<ParentOrderByInput>;
  skip?: number;
  take?: number;
};
