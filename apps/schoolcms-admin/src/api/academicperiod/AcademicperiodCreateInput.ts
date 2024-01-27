export type AcademicperiodCreateInput = {
  academicyearsId: bigint;
  createdAt?: Date | null;
  dayCount: number;
  description?: string | null;
  name: string;
  periodEnd: Date;
  periodStart: Date;
  updatedAt?: Date | null;
};
