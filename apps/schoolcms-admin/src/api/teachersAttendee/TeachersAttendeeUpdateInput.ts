export type TeachersAttendeeUpdateInput = {
  academicyearsId?: bigint;
  createdAt?: Date | null;
  date?: Date;
  teacherId?: bigint;
  timeOfAttendance?: Date | null;
  timeOfDeparture?: Date | null;
  type?: "presence" | "absence";
  updatedAt?: Date | null;
};
