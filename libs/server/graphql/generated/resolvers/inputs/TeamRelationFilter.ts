import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamWhereInput } from "../inputs/TeamWhereInput";

@TypeGraphQL.InputType("TeamRelationFilter", {})
export class TeamRelationFilter {
  @TypeGraphQL.Field(_type => TeamWhereInput, {
    nullable: true
  })
  is?: TeamWhereInput | undefined;

  @TypeGraphQL.Field(_type => TeamWhereInput, {
    nullable: true
  })
  isNot?: TeamWhereInput | undefined;
}
