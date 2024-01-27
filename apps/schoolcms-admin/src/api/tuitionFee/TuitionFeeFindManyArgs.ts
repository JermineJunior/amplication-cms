import { TuitionFeeWhereInput } from "./TuitionFeeWhereInput";
import { TuitionFeeOrderByInput } from "./TuitionFeeOrderByInput";

export type TuitionFeeFindManyArgs = {
  where?: TuitionFeeWhereInput;
  orderBy?: Array<TuitionFeeOrderByInput>;
  skip?: number;
  take?: number;
};
