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
import { PasswordResetWhereUniqueInput } from "./PasswordResetWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PasswordResetUpdateInput } from "./PasswordResetUpdateInput";

@ArgsType()
class UpdatePasswordResetArgs {
  @ApiProperty({
    required: true,
    type: () => PasswordResetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PasswordResetWhereUniqueInput)
  @Field(() => PasswordResetWhereUniqueInput, { nullable: false })
  where!: PasswordResetWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PasswordResetUpdateInput,
  })
  @ValidateNested()
  @Type(() => PasswordResetUpdateInput)
  @Field(() => PasswordResetUpdateInput, { nullable: false })
  data!: PasswordResetUpdateInput;
}

export { UpdatePasswordResetArgs as UpdatePasswordResetArgs };
