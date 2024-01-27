import { TeachersAttendee as TTeachersAttendee } from "../api/teachersAttendee/TeachersAttendee";

export const TEACHERSATTENDEE_TITLE_FIELD = "id";

export const TeachersAttendeeTitle = (record: TTeachersAttendee): string => {
  return record.id?.toString() || String(record.id);
};
