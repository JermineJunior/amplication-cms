import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const TeachersPaymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Academicyears Id" source="academicyearsId" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Payment" source="payment" />
        <TextField label="Payment Date" source="paymentDate" />
        <TextField label="Payment Type" source="payment_type" />
        <TextField label="Teacher Id" source="teacherId" />
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
