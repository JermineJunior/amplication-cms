export type AcademicyearCreateInput = {
  createdAt?: Date | null;
  description?: string | null;
  name: string;
  status: boolean;
  updatedAt?: Date | null;
  yearEnd: Date;
  yearStart: Date;
};
