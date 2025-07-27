import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubtaskWhereInput } from "../inputs/SubtaskWhereInput";

@TypeGraphQL.InputType("SubtaskNullableRelationFilter", {})
export class SubtaskNullableRelationFilter {
  @TypeGraphQL.Field(_type => SubtaskWhereInput, {
    nullable: true
  })
  is?: SubtaskWhereInput | undefined;

  @TypeGraphQL.Field(_type => SubtaskWhereInput, {
    nullable: true
  })
  isNot?: SubtaskWhereInput | undefined;
}
