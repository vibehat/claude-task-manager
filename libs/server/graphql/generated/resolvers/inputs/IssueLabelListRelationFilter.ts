import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelWhereInput } from "../inputs/IssueLabelWhereInput";

@TypeGraphQL.InputType("IssueLabelListRelationFilter", {})
export class IssueLabelListRelationFilter {
  @TypeGraphQL.Field(_type => IssueLabelWhereInput, {
    nullable: true
  })
  every?: IssueLabelWhereInput | undefined;

  @TypeGraphQL.Field(_type => IssueLabelWhereInput, {
    nullable: true
  })
  some?: IssueLabelWhereInput | undefined;

  @TypeGraphQL.Field(_type => IssueLabelWhereInput, {
    nullable: true
  })
  none?: IssueLabelWhereInput | undefined;
}
