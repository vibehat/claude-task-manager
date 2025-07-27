import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TeamMemberScalarWhereInput", {})
export class TeamMemberScalarWhereInput {
  @TypeGraphQL.Field(_type => [TeamMemberScalarWhereInput], {
    nullable: true
  })
  AND?: TeamMemberScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberScalarWhereInput], {
    nullable: true
  })
  OR?: TeamMemberScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberScalarWhereInput], {
    nullable: true
  })
  NOT?: TeamMemberScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  teamId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
