import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AcademicperiodEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Academicyears Id"
          source="academicyearsId"
        />
        <DateTimeInput label="Created At" source="createdAt" />
        <NumberInput step={1} label="Day Count" source="dayCount" />
        <TextInput label="Description" source="description" />
        <TextInput label="Name" source="name" />
        <DateTimeInput label="Period End" source="periodEnd" />
        <DateTimeInput label="Period Start" source="periodStart" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
