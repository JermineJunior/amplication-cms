import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SubjectList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Subjects"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Academicyears Id" source="academicyearsId" />
        <TextField label="Classroom Id" source="classroomId" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Full Degree" source="fullDegree" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
