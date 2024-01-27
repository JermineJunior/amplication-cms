export type PersonalAccessTokenUpdateInput = {
  abilities?: string | null;
  createdAt?: Date | null;
  expiresAt?: Date | null;
  lastUsedAt?: Date | null;
  name?: string;
  token?: string;
  tokenableId?: bigint;
  tokenableType?: string;
  updatedAt?: Date | null;
};
