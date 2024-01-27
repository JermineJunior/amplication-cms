import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ParentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Academicyears Id" source="academicyearsId" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Email" source="email" />
        <TextField label="Email Verified At" source="emailVerifiedAt" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Parent Address" source="parentAddress" />
        <TextField label="Parent House Number" source="parentHouseNumber" />
        <TextField label="Parent Profession" source="parentProfession" />
        <TextField label="Password" source="password" />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="Remember Token" source="rememberToken" />
        <TextField label="Serial Code" source="serialCode" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Whatsapp Number" source="whatsappNumber" />
      </SimpleShowLayout>
    </Show>
  );
};
