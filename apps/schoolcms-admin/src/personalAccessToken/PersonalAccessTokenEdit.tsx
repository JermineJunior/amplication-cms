import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const PersonalAccessTokenEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Abilities" source="abilities" />
        <DateTimeInput label="Created At" source="createdAt" />
        <DateTimeInput label="Expires At" source="expiresAt" />
        <DateTimeInput label="Last Used At" source="lastUsedAt" />
        <TextInput label="Name" source="name" />
        <TextInput label="Token" source="token" />
        <NumberInput step={1} label="Tokenable Id" source="tokenableId" />
        <TextInput label="Tokenable Type" source="tokenableType" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
