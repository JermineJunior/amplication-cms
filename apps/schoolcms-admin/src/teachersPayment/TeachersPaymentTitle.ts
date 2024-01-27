import { TeachersPayment as TTeachersPayment } from "../api/teachersPayment/TeachersPayment";

export const TEACHERSPAYMENT_TITLE_FIELD = "description";

export const TeachersPaymentTitle = (record: TTeachersPayment): string => {
  return record.description?.toString() || String(record.id);
};
