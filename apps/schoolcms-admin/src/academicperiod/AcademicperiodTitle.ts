import { Academicperiod as TAcademicperiod } from "../api/academicperiod/Academicperiod";

export const ACADEMICPERIOD_TITLE_FIELD = "name";

export const AcademicperiodTitle = (record: TAcademicperiod): string => {
  return record.name?.toString() || String(record.id);
};
