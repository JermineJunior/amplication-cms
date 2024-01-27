import { TeachersPaymentWhereInput } from "./TeachersPaymentWhereInput";
import { TeachersPaymentOrderByInput } from "./TeachersPaymentOrderByInput";

export type TeachersPaymentFindManyArgs = {
  where?: TeachersPaymentWhereInput;
  orderBy?: Array<TeachersPaymentOrderByInput>;
  skip?: number;
  take?: number;
};
