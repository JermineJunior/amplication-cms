export type TuitionFee = {
  academicyearsId: bigint;
  createdAt: Date | null;
  description: string | null;
  id: bigint;
  payment: number;
  paymentDate: Date;
  studentId: bigint;
  updatedAt: Date | null;
};
