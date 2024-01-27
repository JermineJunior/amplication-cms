import { Academicyear as TAcademicyear } from "../api/academicyear/Academicyear";

export const ACADEMICYEAR_TITLE_FIELD = "name";

export const AcademicyearTitle = (record: TAcademicyear): string => {
  return record.name?.toString() || String(record.id);
};
