import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MigrationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Batch" source="batch" />
        <TextField label="ID" source="id" />
        <TextField label="Migration" source="migration" />
      </SimpleShowLayout>
    </Show>
  );
};
