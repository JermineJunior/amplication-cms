import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const TeacherShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Academicyears Id" source="academicyearsId" />
        <TextField label="Base Salary" source="baseSalary" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Date Of Birth" source="dateOfBirth" />
        <TextField label="Date Of Contract" source="dateOfContract" />
        <TextField label="Email" source="email" />
        <TextField label="Email Verified At" source="emailVerifiedAt" />
        <TextField label="ID" source="id" />
        <TextField label="Living" source="living" />
        <TextField label="Name" source="name" />
        <TextField label="Password" source="password" />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="Qualification" source="qualification" />
        <TextField label="Remember Token" source="rememberToken" />
        <TextField label="Serial Code" source="serialCode" />
        <TextField label="Specialization" source="specialization" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Whatsapp Number" source="whatsappNumber" />
      </SimpleShowLayout>
    </Show>
  );
};
