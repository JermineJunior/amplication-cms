export type TeachersPaymentUpdateInput = {
  academicyearsId?: bigint;
  createdAt?: Date | null;
  description?: string | null;
  payment?: number;
  paymentDate?: Date;
  payment_type?: "first_payment" | "second_payment" | "third_payment";
  teacherId?: bigint;
  updatedAt?: Date | null;
};
