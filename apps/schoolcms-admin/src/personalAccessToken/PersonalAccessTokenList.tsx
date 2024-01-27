import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PersonalAccessTokenList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PersonalAccessTokens"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Abilities" source="abilities" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Expires At" source="expiresAt" />
        <TextField label="ID" source="id" />
        <TextField label="Last Used At" source="lastUsedAt" />
        <TextField label="Name" source="name" />
        <TextField label="Token" source="token" />
        <TextField label="Tokenable Id" source="tokenableId" />
        <TextField label="Tokenable Type" source="tokenableType" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
