export type UserModelCreateInput = {
  createdAt?: Date | null;
  email?: string | null;
  emailVerifiedAt?: Date | null;
  name: string;
  password: string;
  rememberToken?: string | null;
  serialCode: string;
  updatedAt?: Date | null;
};
