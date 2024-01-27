import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type MigrationWhereInput = {
  batch?: IntFilter;
  id?: IntFilter;
  migration?: StringFilter;
};
