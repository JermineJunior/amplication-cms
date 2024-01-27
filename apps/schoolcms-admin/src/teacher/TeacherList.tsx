import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TeacherList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Teachers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Academicyears Id" source="academicyearsId" />
        <TextField label="Base Salary" source="baseSalary" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Date Of Birth" source="dateOfBirth" />
        <TextField label="Date Of Contract" source="dateOfContract" />
        <TextField label="Email" source="email" />
        <TextField label="Email Verified At" source="emailVerifiedAt" />
        <TextField label="ID" source="id" />
        <TextField label="Living" source="living" />
        <TextField label="Name" source="name" />
        <TextField label="Password" source="password" />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="Qualification" source="qualification" />
        <TextField label="Remember Token" source="rememberToken" />
        <TextField label="Serial Code" source="serialCode" />
        <TextField label="Specialization" source="specialization" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Whatsapp Number" source="whatsappNumber" />
      </Datagrid>
    </List>
  );
};
