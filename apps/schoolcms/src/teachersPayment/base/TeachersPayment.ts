/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsDate, IsOptional, IsString, IsEnum } from "class-validator";
import { GraphQLBigInt } from "../../util/GraphQLBigInt";
import { Type } from "class-transformer";
import { EnumTeachersPaymentPaymentType } from "./EnumTeachersPaymentPaymentType";

@ObjectType()
class TeachersPayment {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => GraphQLBigInt)
  academicyearsId!: bigint;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => GraphQLBigInt)
  id!: bigint;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  payment!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  paymentDate!: Date;

  @ApiProperty({
    required: true,
    enum: EnumTeachersPaymentPaymentType,
  })
  @IsEnum(EnumTeachersPaymentPaymentType)
  @Field(() => EnumTeachersPaymentPaymentType, {
    nullable: true,
  })
  payment_type?: "first_payment" | "second_payment" | "third_payment";

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => GraphQLBigInt)
  teacherId!: bigint;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;
}

export { TeachersPayment as TeachersPayment };
