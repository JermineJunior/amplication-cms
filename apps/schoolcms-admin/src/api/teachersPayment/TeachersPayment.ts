export type TeachersPayment = {
  academicyearsId: bigint;
  createdAt: Date | null;
  description: string | null;
  id: bigint;
  payment: number;
  paymentDate: Date;
  payment_type?: "first_payment" | "second_payment" | "third_payment";
  teacherId: bigint;
  updatedAt: Date | null;
};
