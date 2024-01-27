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
import { TuitionFeeWhereInput } from "./TuitionFeeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TuitionFeeOrderByInput } from "./TuitionFeeOrderByInput";

@ArgsType()
class TuitionFeeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TuitionFeeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TuitionFeeWhereInput, { nullable: true })
  @Type(() => TuitionFeeWhereInput)
  where?: TuitionFeeWhereInput;

  @ApiProperty({
    required: false,
    type: [TuitionFeeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TuitionFeeOrderByInput], { nullable: true })
  @Type(() => TuitionFeeOrderByInput)
  orderBy?: Array<TuitionFeeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TuitionFeeFindManyArgs as TuitionFeeFindManyArgs };
