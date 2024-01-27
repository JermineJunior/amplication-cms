import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const StudentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Academicyears Id" source="academicyearsId" />
        <TextField label="Amount To Be Paid" source="amountToBePaid" />
        <TextField label="Classroom Id" source="classroomId" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Enterprise Id" source="enterpriseId" />
        <TextField label="Father Name" source="fatherName" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="Mother Name" source="motherName" />
        <TextField label="Mother Phone" source="motherPhone" />
        <TextField label="Name" source="name" />
        <TextField label="Parent Id" source="parentId" />
        <TextField label="Password" source="password" />
        <TextField label="Serial Code" source="serialCode" />
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
