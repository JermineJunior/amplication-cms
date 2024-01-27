import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SubjectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Academicyears Id" source="academicyearsId" />
        <TextField label="Classroom Id" source="classroomId" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Full Degree" source="fullDegree" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
