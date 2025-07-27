import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelWhereInput } from "../inputs/LabelWhereInput";

@TypeGraphQL.InputType("LabelRelationFilter", {})
export class LabelRelationFilter {
  @TypeGraphQL.Field(_type => LabelWhereInput, {
    nullable: true
  })
  is?: LabelWhereInput | undefined;

  @TypeGraphQL.Field(_type => LabelWhereInput, {
    nullable: true
  })
  isNot?: LabelWhereInput | undefined;
}
