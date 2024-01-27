export type TuitionFeeCreateInput = {
  academicyearsId: bigint;
  createdAt?: Date | null;
  description?: string | null;
  payment: number;
  paymentDate: Date;
  studentId: bigint;
  updatedAt?: Date | null;
};
