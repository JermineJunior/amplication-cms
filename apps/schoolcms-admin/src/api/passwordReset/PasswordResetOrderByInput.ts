import { SortOrder } from "../../util/SortOrder";

export type PasswordResetOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  token?: SortOrder;
};
