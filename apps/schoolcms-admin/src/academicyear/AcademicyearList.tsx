import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const AcademicyearList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Academicyears"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Created At" source="createdAt" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <BooleanField label="Status" source="status" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Year End" source="yearEnd" />
        <TextField label="Year Start" source="yearStart" />
      </Datagrid>
    </List>
  );
};
