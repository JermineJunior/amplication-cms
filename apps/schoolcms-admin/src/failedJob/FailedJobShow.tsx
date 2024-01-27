import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const FailedJobShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Connection" source="connection" />
        <TextField label="Exception" source="exception" />
        <DateField source="failedAt" label="Failed At" />
        <TextField label="ID" source="id" />
        <TextField label="Payload" source="payload" />
        <TextField label="Queue" source="queue" />
        <TextField label="Uuid" source="uuid" />
      </SimpleShowLayout>
    </Show>
  );
};
