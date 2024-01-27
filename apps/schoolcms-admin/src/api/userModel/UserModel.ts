export type UserModel = {
  createdAt: Date | null;
  email: string | null;
  emailVerifiedAt: Date | null;
  id: bigint;
  name: string;
  password: string;
  rememberToken: string | null;
  serialCode: string;
  updatedAt: Date | null;
};
