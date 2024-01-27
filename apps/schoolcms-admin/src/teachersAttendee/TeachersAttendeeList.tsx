import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TeachersAttendeeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TeachersAttendees"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Academicyears Id" source="academicyearsId" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="Teacher Id" source="teacherId" />
        <TextField label="Time Of Attendance" source="timeOfAttendance" />
        <TextField label="Time Of Departure" source="timeOfDeparture" />
        <TextField label="Type" source="type" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
