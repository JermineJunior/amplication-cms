import { SortOrder } from "../../util/SortOrder";

export type UserModelOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  emailVerifiedAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  password?: SortOrder;
  rememberToken?: SortOrder;
  serialCode?: SortOrder;
  updatedAt?: SortOrder;
};
