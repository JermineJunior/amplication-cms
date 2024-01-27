import { UserModelWhereInput } from "./UserModelWhereInput";
import { UserModelOrderByInput } from "./UserModelOrderByInput";

export type UserModelFindManyArgs = {
  where?: UserModelWhereInput;
  orderBy?: Array<UserModelOrderByInput>;
  skip?: number;
  take?: number;
};
