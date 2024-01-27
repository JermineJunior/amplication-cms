import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ClassroomList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Classrooms"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Academicyears Id" source="academicyearsId" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Enterprises Id" source="enterprisesId" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Short Name" source="shortName" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
