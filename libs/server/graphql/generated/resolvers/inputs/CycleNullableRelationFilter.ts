import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleWhereInput } from "../inputs/CycleWhereInput";

@TypeGraphQL.InputType("CycleNullableRelationFilter", {})
export class CycleNullableRelationFilter {
  @TypeGraphQL.Field(_type => CycleWhereInput, {
    nullable: true
  })
  is?: CycleWhereInput | undefined;

  @TypeGraphQL.Field(_type => CycleWhereInput, {
    nullable: true
  })
  isNot?: CycleWhereInput | undefined;
}
