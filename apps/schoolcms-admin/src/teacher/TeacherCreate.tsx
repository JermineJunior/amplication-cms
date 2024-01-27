import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const TeacherCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Academicyears Id"
          source="academicyearsId"
        />
        <NumberInput label="Base Salary" source="baseSalary" />
        <DateTimeInput label="Created At" source="createdAt" />
        <DateTimeInput label="Date Of Birth" source="dateOfBirth" />
        <DateTimeInput label="Date Of Contract" source="dateOfContract" />
        <TextInput label="Email" source="email" />
        <DateTimeInput label="Email Verified At" source="emailVerifiedAt" />
        <TextInput label="Living" source="living" />
        <TextInput label="Name" source="name" />
        <TextInput label="Password" source="password" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <TextInput label="Qualification" source="qualification" />
        <TextInput label="Remember Token" source="rememberToken" />
        <TextInput label="Serial Code" source="serialCode" />
        <TextInput label="Specialization" source="specialization" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Whatsapp Number" source="whatsappNumber" />
      </SimpleForm>
    </Create>
  );
};
