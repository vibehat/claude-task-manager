import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubtaskWhereInput } from "../inputs/SubtaskWhereInput";

@TypeGraphQL.InputType("SubtaskListRelationFilter", {})
export class SubtaskListRelationFilter {
  @TypeGraphQL.Field(_type => SubtaskWhereInput, {
    nullable: true
  })
  every?: SubtaskWhereInput | undefined;

  @TypeGraphQL.Field(_type => SubtaskWhereInput, {
    nullable: true
  })
  some?: SubtaskWhereInput | undefined;

  @TypeGraphQL.Field(_type => SubtaskWhereInput, {
    nullable: true
  })
  none?: SubtaskWhereInput | undefined;
}
