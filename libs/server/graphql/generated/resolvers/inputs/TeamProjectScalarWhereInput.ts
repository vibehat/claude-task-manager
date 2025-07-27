import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TeamProjectScalarWhereInput", {})
export class TeamProjectScalarWhereInput {
  @TypeGraphQL.Field(_type => [TeamProjectScalarWhereInput], {
    nullable: true
  })
  AND?: TeamProjectScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectScalarWhereInput], {
    nullable: true
  })
  OR?: TeamProjectScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectScalarWhereInput], {
    nullable: true
  })
  NOT?: TeamProjectScalarWhereInput[] | undefined;

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
  projectId?: StringFilter | undefined;
}
