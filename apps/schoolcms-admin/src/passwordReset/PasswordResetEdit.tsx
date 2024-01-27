import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PasswordResetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Email" source="email" />
        <TextInput label="Token" source="token" />
      </SimpleForm>
    </Edit>
  );
};
