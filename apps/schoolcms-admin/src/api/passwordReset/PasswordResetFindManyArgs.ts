import { PasswordResetWhereInput } from "./PasswordResetWhereInput";
import { PasswordResetOrderByInput } from "./PasswordResetOrderByInput";

export type PasswordResetFindManyArgs = {
  where?: PasswordResetWhereInput;
  orderBy?: Array<PasswordResetOrderByInput>;
  skip?: number;
  take?: number;
};
