import { PersonalAccessTokenWhereInput } from "./PersonalAccessTokenWhereInput";
import { PersonalAccessTokenOrderByInput } from "./PersonalAccessTokenOrderByInput";

export type PersonalAccessTokenFindManyArgs = {
  where?: PersonalAccessTokenWhereInput;
  orderBy?: Array<PersonalAccessTokenOrderByInput>;
  skip?: number;
  take?: number;
};
