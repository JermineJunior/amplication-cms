import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ClassroomCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Academicyears Id"
          source="academicyearsId"
        />
        <DateTimeInput label="Created At" source="createdAt" />
        <NumberInput step={1} label="Enterprises Id" source="enterprisesId" />
        <TextInput label="Name" source="name" />
        <TextInput label="Short Name" source="shortName" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
