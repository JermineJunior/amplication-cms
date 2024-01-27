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
import { IsInt, IsDate, IsOptional, IsString } from "class-validator";
import { GraphQLBigInt } from "../../util/GraphQLBigInt";
import { Type } from "class-transformer";

@ObjectType()
class Subject {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => GraphQLBigInt)
  academicyearsId!: bigint;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => GraphQLBigInt)
  classroomId!: bigint;

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
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  fullDegree!: number | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => GraphQLBigInt)
  id!: bigint;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

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

export { Subject as Subject };
