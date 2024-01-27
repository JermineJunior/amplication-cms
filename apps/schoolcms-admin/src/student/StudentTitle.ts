import { Student as TStudent } from "../api/student/Student";

export const STUDENT_TITLE_FIELD = "fatherName";

export const StudentTitle = (record: TStudent): string => {
  return record.fatherName?.toString() || String(record.id);
};
