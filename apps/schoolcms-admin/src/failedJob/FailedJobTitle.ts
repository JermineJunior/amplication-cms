import { FailedJob as TFailedJob } from "../api/failedJob/FailedJob";

export const FAILEDJOB_TITLE_FIELD = "connection";

export const FailedJobTitle = (record: TFailedJob): string => {
  return record.connection?.toString() || String(record.id);
};
