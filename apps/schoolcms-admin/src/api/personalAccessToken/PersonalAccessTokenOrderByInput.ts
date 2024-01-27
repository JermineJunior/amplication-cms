import { SortOrder } from "../../util/SortOrder";

export type PersonalAccessTokenOrderByInput = {
  abilities?: SortOrder;
  createdAt?: SortOrder;
  expiresAt?: SortOrder;
  id?: SortOrder;
  lastUsedAt?: SortOrder;
  name?: SortOrder;
  token?: SortOrder;
  tokenableId?: SortOrder;
  tokenableType?: SortOrder;
  updatedAt?: SortOrder;
};
