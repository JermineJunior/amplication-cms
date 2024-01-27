import { PasswordReset as TPasswordReset } from "../api/passwordReset/PasswordReset";

export const PASSWORDRESET_TITLE_FIELD = "email";

export const PasswordResetTitle = (record: TPasswordReset): string => {
  return record.email?.toString() || String(record.id);
};
