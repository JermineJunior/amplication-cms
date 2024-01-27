import { Subject as TSubject } from "../api/subject/Subject";

export const SUBJECT_TITLE_FIELD = "name";

export const SubjectTitle = (record: TSubject): string => {
  return record.name?.toString() || String(record.id);
};
