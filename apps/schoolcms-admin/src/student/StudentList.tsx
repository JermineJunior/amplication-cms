import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const StudentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Students"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Academicyears Id" source="academicyearsId" />
        <TextField label="Amount To Be Paid" source="amountToBePaid" />
        <TextField label="Classroom Id" source="classroomId" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Enterprise Id" source="enterpriseId" />
        <TextField label="Father Name" source="fatherName" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="Mother Name" source="motherName" />
        <TextField label="Mother Phone" source="motherPhone" />
        <TextField label="Name" source="name" />
        <TextField label="Parent Id" source="parentId" />
        <TextField label="Password" source="password" />
        <TextField label="Serial Code" source="serialCode" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
