import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const AcademicyearShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Created At" source="createdAt" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <BooleanField label="Status" source="status" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Year End" source="yearEnd" />
        <TextField label="Year Start" source="yearStart" />
      </SimpleShowLayout>
    </Show>
  );
};
