import { Classroom as TClassroom } from "../api/classroom/Classroom";

export const CLASSROOM_TITLE_FIELD = "name";

export const ClassroomTitle = (record: TClassroom): string => {
  return record.name?.toString() || String(record.id);
};
