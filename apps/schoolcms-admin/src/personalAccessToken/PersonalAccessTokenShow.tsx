import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const PersonalAccessTokenShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
