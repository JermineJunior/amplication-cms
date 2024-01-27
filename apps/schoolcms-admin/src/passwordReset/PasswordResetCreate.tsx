import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PasswordResetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Email" source="email" />
        <TextInput label="Token" source="token" />
      </SimpleForm>
    </Create>
  );
};
