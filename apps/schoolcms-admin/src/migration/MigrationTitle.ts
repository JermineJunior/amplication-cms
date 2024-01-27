import { Migration as TMigration } from "../api/migration/Migration";

export const MIGRATION_TITLE_FIELD = "migration";

export const MigrationTitle = (record: TMigration): string => {
  return record.migration?.toString() || String(record.id);
};
