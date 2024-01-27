import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PasswordResetList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PasswordResets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Created At" source="createdAt" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Token" source="token" />
      </Datagrid>
    </List>
  );
};
