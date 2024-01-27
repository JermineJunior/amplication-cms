import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const UserModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Created At" source="createdAt" />
        <TextField label="Email" source="email" />
        <TextField label="Email Verified At" source="emailVerifiedAt" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Password" source="password" />
        <TextField label="Remember Token" source="rememberToken" />
        <TextField label="Serial Code" source="serialCode" />
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
