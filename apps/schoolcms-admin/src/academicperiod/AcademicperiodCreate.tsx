import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AcademicperiodCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
