import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const AcademicyearCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Description" source="description" />
        <TextInput label="Name" source="name" />
        <BooleanInput label="Status" source="status" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <DateTimeInput label="Year End" source="yearEnd" />
        <DateTimeInput label="Year Start" source="yearStart" />
      </SimpleForm>
    </Create>
  );
};
