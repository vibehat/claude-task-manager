import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamMemberWhereInput } from "../inputs/TeamMemberWhereInput";

@TypeGraphQL.InputType("TeamMemberListRelationFilter", {})
export class TeamMemberListRelationFilter {
  @TypeGraphQL.Field(_type => TeamMemberWhereInput, {
    nullable: true
  })
  every?: TeamMemberWhereInput | undefined;

  @TypeGraphQL.Field(_type => TeamMemberWhereInput, {
    nullable: true
  })
  some?: TeamMemberWhereInput | undefined;

  @TypeGraphQL.Field(_type => TeamMemberWhereInput, {
    nullable: true
  })
  none?: TeamMemberWhereInput | undefined;
}
