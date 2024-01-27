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
import { BigIntFilter } from "../../util/BigIntFilter";
import { Type } from "class-transformer";
import { IsOptional } from "class-validator";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

@InputType()
class TuitionFeeWhereInput {
  @ApiProperty({
    required: false,
    type: BigIntFilter,
  })
  @Type(() => BigIntFilter)
  @IsOptional()
  @Field(() => BigIntFilter, {
    nullable: true,
  })
  academicyearsId?: BigIntFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  createdAt?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: BigIntFilter,
  })
  @Type(() => BigIntFilter)
  @IsOptional()
  @Field(() => BigIntFilter, {
    nullable: true,
  })
  id?: BigIntFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  payment?: IntFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  paymentDate?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: BigIntFilter,
  })
  @Type(() => BigIntFilter)
  @IsOptional()
  @Field(() => BigIntFilter, {
    nullable: true,
  })
  studentId?: BigIntFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeNullableFilter;
}

export { TuitionFeeWhereInput as TuitionFeeWhereInput };
