import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FailedJobList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FailedJobs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Connection" source="connection" />
        <TextField label="Exception" source="exception" />
        <DateField source="failedAt" label="Failed At" />
        <TextField label="ID" source="id" />
        <TextField label="Payload" source="payload" />
        <TextField label="Queue" source="queue" />
        <TextField label="Uuid" source="uuid" />
      </Datagrid>
    </List>
  );
};
