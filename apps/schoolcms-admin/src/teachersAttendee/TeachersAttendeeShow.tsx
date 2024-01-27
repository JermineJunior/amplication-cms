import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const TeachersAttendeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Academicyears Id" source="academicyearsId" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="Teacher Id" source="teacherId" />
        <TextField label="Time Of Attendance" source="timeOfAttendance" />
        <TextField label="Time Of Departure" source="timeOfDeparture" />
        <TextField label="Type" source="type" />
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
