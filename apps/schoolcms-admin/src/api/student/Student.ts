export type Student = {
  academicyearsId: bigint;
  amountToBePaid: number | null;
  classroomId: bigint;
  createdAt: Date | null;
  enterpriseId: bigint;
  fatherName: string;
  gender?: "male" | "female" | null;
  id: bigint;
  motherName: string | null;
  motherPhone: string | null;
  name: string;
  parentId: bigint;
  password: string;
  serialCode: string;
  updatedAt: Date | null;
};
