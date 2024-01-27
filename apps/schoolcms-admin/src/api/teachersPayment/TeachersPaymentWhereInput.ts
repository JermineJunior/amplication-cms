import { BigIntFilter } from "../../util/BigIntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type TeachersPaymentWhereInput = {
  academicyearsId?: BigIntFilter;
  createdAt?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: BigIntFilter;
  payment?: IntFilter;
  paymentDate?: DateTimeFilter;
  payment_type?: "first_payment" | "second_payment" | "third_payment";
  teacherId?: BigIntFilter;
  updatedAt?: DateTimeNullableFilter;
};
