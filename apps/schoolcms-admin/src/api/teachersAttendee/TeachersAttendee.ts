export type TeachersAttendee = {
  academicyearsId: bigint;
  createdAt: Date | null;
  date: Date;
  id: bigint;
  teacherId: bigint;
  timeOfAttendance: Date | null;
  timeOfDeparture: Date | null;
  type?: "presence" | "absence";
  updatedAt: Date | null;
};
