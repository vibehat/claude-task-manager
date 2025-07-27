import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { TeamRelationFilter } from "../inputs/TeamRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("TeamMemberWhereInput", {})
export class TeamMemberWhereInput {
  @TypeGraphQL.Field(_type => [TeamMemberWhereInput], {
    nullable: true
  })
  AND?: TeamMemberWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberWhereInput], {
    nullable: true
  })
  OR?: TeamMemberWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberWhereInput], {
    nullable: true
  })
  NOT?: TeamMemberWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => TeamRelationFilter, {
    nullable: true
  })
  team?: TeamRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;
}
