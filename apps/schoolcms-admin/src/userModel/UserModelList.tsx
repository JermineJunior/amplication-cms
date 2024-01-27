import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserModelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserModels"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Created At" source="createdAt" />
        <TextField label="Email" source="email" />
        <TextField label="Email Verified At" source="emailVerifiedAt" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Password" source="password" />
        <TextField label="Remember Token" source="rememberToken" />
        <TextField label="Serial Code" source="serialCode" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
