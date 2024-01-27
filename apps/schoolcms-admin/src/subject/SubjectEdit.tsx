import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const SubjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Academicyears Id"
          source="academicyearsId"
        />
        <NumberInput step={1} label="Classroom Id" source="classroomId" />
        <DateTimeInput label="Created At" source="createdAt" />
        <NumberInput step={1} label="Full Degree" source="fullDegree" />
        <TextInput label="Name" source="name" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
