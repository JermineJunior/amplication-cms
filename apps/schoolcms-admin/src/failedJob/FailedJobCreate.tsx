import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FailedJobCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Connection" source="connection" />
        <TextInput label="Exception" source="exception" />
        <TextInput label="Payload" source="payload" />
        <TextInput label="Queue" source="queue" />
        <TextInput label="Uuid" source="uuid" />
      </SimpleForm>
    </Create>
  );
};
