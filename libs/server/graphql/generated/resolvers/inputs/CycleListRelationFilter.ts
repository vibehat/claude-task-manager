import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleWhereInput } from "../inputs/CycleWhereInput";

@TypeGraphQL.InputType("CycleListRelationFilter", {})
export class CycleListRelationFilter {
  @TypeGraphQL.Field(_type => CycleWhereInput, {
    nullable: true
  })
  every?: CycleWhereInput | undefined;

  @TypeGraphQL.Field(_type => CycleWhereInput, {
    nullable: true
  })
  some?: CycleWhereInput | undefined;

  @TypeGraphQL.Field(_type => CycleWhereInput, {
    nullable: true
  })
  none?: CycleWhereInput | undefined;
}
