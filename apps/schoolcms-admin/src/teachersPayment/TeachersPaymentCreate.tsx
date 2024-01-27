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

export const TeachersPaymentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Academicyears Id"
          source="academicyearsId"
        />
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Description" source="description" />
        <NumberInput step={1} label="Payment" source="payment" />
        <DateTimeInput label="Payment Date" source="paymentDate" />
        <SelectInput
          source="payment_type"
          label="Payment Type"
          choices={[
            { label: "first_payment", value: "first_payment" },
            { label: "second_payment", value: "second_payment" },
            { label: "third_payment", value: "third_payment" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Teacher Id" source="teacherId" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
