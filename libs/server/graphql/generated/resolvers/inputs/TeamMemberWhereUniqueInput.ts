import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { TeamMemberTeamIdUserIdCompoundUniqueInput } from "../inputs/TeamMemberTeamIdUserIdCompoundUniqueInput";
import { TeamMemberWhereInput } from "../inputs/TeamMemberWhereInput";
import { TeamRelationFilter } from "../inputs/TeamRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("TeamMemberWhereUniqueInput", {})
export class TeamMemberWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TeamMemberTeamIdUserIdCompoundUniqueInput, {
    nullable: true
  })
  teamId_userId?: TeamMemberTeamIdUserIdCompoundUniqueInput | undefined;

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
