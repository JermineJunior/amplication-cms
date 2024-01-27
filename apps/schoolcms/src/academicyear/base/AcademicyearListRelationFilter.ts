/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AcademicyearWhereInput } from "./AcademicyearWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AcademicyearListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AcademicyearWhereInput,
  })
  @ValidateNested()
  @Type(() => AcademicyearWhereInput)
  @IsOptional()
  @Field(() => AcademicyearWhereInput, {
    nullable: true,
  })
  every?: AcademicyearWhereInput;

  @ApiProperty({
    required: false,
    type: () => AcademicyearWhereInput,
  })
  @ValidateNested()
  @Type(() => AcademicyearWhereInput)
  @IsOptional()
  @Field(() => AcademicyearWhereInput, {
    nullable: true,
  })
  some?: AcademicyearWhereInput;

  @ApiProperty({
    required: false,
    type: () => AcademicyearWhereInput,
  })
  @ValidateNested()
  @Type(() => AcademicyearWhereInput)
  @IsOptional()
  @Field(() => AcademicyearWhereInput, {
    nullable: true,
  })
  none?: AcademicyearWhereInput;
}
export { AcademicyearListRelationFilter as AcademicyearListRelationFilter };
