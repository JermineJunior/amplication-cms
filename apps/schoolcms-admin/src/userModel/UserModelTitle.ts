import { UserModel as TUserModel } from "../api/userModel/UserModel";

export const USERMODEL_TITLE_FIELD = "name";

export const UserModelTitle = (record: TUserModel): string => {
  return record.name?.toString() || String(record.id);
};
