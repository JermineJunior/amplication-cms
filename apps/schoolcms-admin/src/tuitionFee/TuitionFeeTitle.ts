import { TuitionFee as TTuitionFee } from "../api/tuitionFee/TuitionFee";

export const TUITIONFEE_TITLE_FIELD = "description";

export const TuitionFeeTitle = (record: TTuitionFee): string => {
  return record.description?.toString() || String(record.id);
};
