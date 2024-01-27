import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ParentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Academicyears Id"
          source="academicyearsId"
        />
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Email" source="email" />
        <DateTimeInput label="Email Verified At" source="emailVerifiedAt" />
        <TextInput label="Name" source="name" />
        <TextInput label="Parent Address" source="parentAddress" />
        <TextInput label="Parent House Number" source="parentHouseNumber" />
        <TextInput label="Parent Profession" source="parentProfession" />
        <TextInput label="Password" source="password" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <TextInput label="Remember Token" source="rememberToken" />
        <TextInput label="Serial Code" source="serialCode" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Whatsapp Number" source="whatsappNumber" />
      </SimpleForm>
    </Edit>
  );
};
