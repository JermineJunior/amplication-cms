import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const TuitionFeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Academicyears Id" source="academicyearsId" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Payment" source="payment" />
        <TextField label="Payment Date" source="paymentDate" />
        <TextField label="Student Id" source="studentId" />
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
