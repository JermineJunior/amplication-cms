/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClassroomWhereUniqueInput } from "./ClassroomWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ClassroomUpdateInput } from "./ClassroomUpdateInput";

@ArgsType()
class UpdateClassroomArgs {
  @ApiProperty({
    required: true,
    type: () => ClassroomWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClassroomWhereUniqueInput)
  @Field(() => ClassroomWhereUniqueInput, { nullable: false })
  where!: ClassroomWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ClassroomUpdateInput,
  })
  @ValidateNested()
  @Type(() => ClassroomUpdateInput)
  @Field(() => ClassroomUpdateInput, { nullable: false })
  data!: ClassroomUpdateInput;
}

export { UpdateClassroomArgs as UpdateClassroomArgs };
