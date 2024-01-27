import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const AcademicperiodShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Academicyears Id" source="academicyearsId" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Day Count" source="dayCount" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Period End" source="periodEnd" />
        <TextField label="Period Start" source="periodStart" />
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
