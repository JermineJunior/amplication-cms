import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const AcademicyearEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Description" source="description" />
        <TextInput label="Name" source="name" />
        <BooleanInput label="Status" source="status" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <DateTimeInput label="Year End" source="yearEnd" />
        <DateTimeInput label="Year Start" source="yearStart" />
      </SimpleForm>
    </Edit>
  );
};
