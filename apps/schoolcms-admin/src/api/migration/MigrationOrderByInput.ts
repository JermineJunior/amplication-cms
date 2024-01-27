import { SortOrder } from "../../util/SortOrder";

export type MigrationOrderByInput = {
  batch?: SortOrder;
  id?: SortOrder;
  migration?: SortOrder;
};
