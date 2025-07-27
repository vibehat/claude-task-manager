import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamProjectWhereInput } from "../inputs/TeamProjectWhereInput";

@TypeGraphQL.InputType("TeamProjectListRelationFilter", {})
export class TeamProjectListRelationFilter {
  @TypeGraphQL.Field(_type => TeamProjectWhereInput, {
    nullable: true
  })
  every?: TeamProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => TeamProjectWhereInput, {
    nullable: true
  })
  some?: TeamProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => TeamProjectWhereInput, {
    nullable: true
  })
  none?: TeamProjectWhereInput | undefined;
}
