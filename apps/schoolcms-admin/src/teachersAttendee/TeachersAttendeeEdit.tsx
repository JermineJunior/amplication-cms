import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const TeachersAttendeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Academicyears Id"
          source="academicyearsId"
        />
        <DateTimeInput label="Created At" source="createdAt" />
        <DateTimeInput label="Date" source="date" />
        <NumberInput step={1} label="Teacher Id" source="teacherId" />
        <DateTimeInput label="Time Of Attendance" source="timeOfAttendance" />
        <DateTimeInput label="Time Of Departure" source="timeOfDeparture" />
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "presence", value: "presence" },
            { label: "absence", value: "absence" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
