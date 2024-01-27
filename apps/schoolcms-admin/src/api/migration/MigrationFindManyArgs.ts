import { MigrationWhereInput } from "./MigrationWhereInput";
import { MigrationOrderByInput } from "./MigrationOrderByInput";

export type MigrationFindManyArgs = {
  where?: MigrationWhereInput;
  orderBy?: Array<MigrationOrderByInput>;
  skip?: number;
  take?: number;
};
