export type TeacherCreateInput = {
  academicyearsId: bigint;
  baseSalary?: number | null;
  createdAt?: Date | null;
  dateOfBirth?: Date | null;
  dateOfContract?: Date | null;
  email?: string | null;
  emailVerifiedAt?: Date | null;
  living?: string | null;
  name: string;
  password: string;
  phoneNumber?: string | null;
  qualification?: string | null;
  rememberToken?: string | null;
  serialCode: string;
  specialization?: string | null;
  updatedAt?: Date | null;
  whatsappNumber?: string | null;
};
