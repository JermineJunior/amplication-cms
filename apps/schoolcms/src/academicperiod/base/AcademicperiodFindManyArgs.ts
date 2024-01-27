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
import { AcademicperiodWhereInput } from "./AcademicperiodWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AcademicperiodOrderByInput } from "./AcademicperiodOrderByInput";

@ArgsType()
class AcademicperiodFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AcademicperiodWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AcademicperiodWhereInput, { nullable: true })
  @Type(() => AcademicperiodWhereInput)
  where?: AcademicperiodWhereInput;

  @ApiProperty({
    required: false,
    type: [AcademicperiodOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AcademicperiodOrderByInput], { nullable: true })
  @Type(() => AcademicperiodOrderByInput)
  orderBy?: Array<AcademicperiodOrderByInput>;

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

export { AcademicperiodFindManyArgs as AcademicperiodFindManyArgs };
