export type PersonalAccessToken = {
  abilities: string | null;
  createdAt: Date | null;
  expiresAt: Date | null;
  id: bigint;
  lastUsedAt: Date | null;
  name: string;
  token: string;
  tokenableId: bigint;
  tokenableType: string;
  updatedAt: Date | null;
};
