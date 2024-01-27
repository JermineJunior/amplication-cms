import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FailedJobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Connection" source="connection" />
        <TextInput label="Exception" source="exception" />
        <TextInput label="Payload" source="payload" />
        <TextInput label="Queue" source="queue" />
        <TextInput label="Uuid" source="uuid" />
      </SimpleForm>
    </Edit>
  );
};
