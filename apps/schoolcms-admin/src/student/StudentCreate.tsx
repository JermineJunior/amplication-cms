import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const StudentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Academicyears Id"
          source="academicyearsId"
        />
        <NumberInput
          step={1}
          label="Amount To Be Paid"
          source="amountToBePaid"
        />
        <NumberInput step={1} label="Classroom Id" source="classroomId" />
        <DateTimeInput label="Created At" source="createdAt" />
        <NumberInput step={1} label="Enterprise Id" source="enterpriseId" />
        <TextInput label="Father Name" source="fatherName" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[
            { label: "male", value: "male" },
            { label: "female", value: "female" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Mother Name" source="motherName" />
        <TextInput label="Mother Phone" source="motherPhone" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Parent Id" source="parentId" />
        <TextInput label="Password" source="password" />
        <TextInput label="Serial Code" source="serialCode" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
