import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TeachersPaymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TeachersPayments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Academicyears Id" source="academicyearsId" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Payment" source="payment" />
        <TextField label="Payment Date" source="paymentDate" />
        <TextField label="Payment Type" source="payment_type" />
        <TextField label="Teacher Id" source="teacherId" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
