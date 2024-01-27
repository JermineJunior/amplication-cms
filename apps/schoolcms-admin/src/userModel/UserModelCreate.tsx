import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const UserModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Email" source="email" />
        <DateTimeInput label="Email Verified At" source="emailVerifiedAt" />
        <TextInput label="Name" source="name" />
        <TextInput label="Password" source="password" />
        <TextInput label="Remember Token" source="rememberToken" />
        <TextInput label="Serial Code" source="serialCode" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
