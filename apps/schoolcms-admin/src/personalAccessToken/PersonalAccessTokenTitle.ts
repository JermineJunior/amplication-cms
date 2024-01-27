import { PersonalAccessToken as TPersonalAccessToken } from "../api/personalAccessToken/PersonalAccessToken";

export const PERSONALACCESSTOKEN_TITLE_FIELD = "name";

export const PersonalAccessTokenTitle = (
  record: TPersonalAccessToken
): string => {
  return record.name?.toString() || String(record.id);
};
