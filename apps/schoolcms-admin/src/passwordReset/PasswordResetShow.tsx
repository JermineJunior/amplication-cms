import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const PasswordResetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Created At" source="createdAt" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Token" source="token" />
      </SimpleShowLayout>
    </Show>
  );
};
