import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TeamProjectTeamIdProjectIdCompoundUniqueInput } from "../inputs/TeamProjectTeamIdProjectIdCompoundUniqueInput";
import { TeamProjectWhereInput } from "../inputs/TeamProjectWhereInput";
import { TeamRelationFilter } from "../inputs/TeamRelationFilter";

@TypeGraphQL.InputType("TeamProjectWhereUniqueInput", {})
export class TeamProjectWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TeamProjectTeamIdProjectIdCompoundUniqueInput, {
    nullable: true
  })
  teamId_projectId?: TeamProjectTeamIdProjectIdCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectWhereInput], {
    nullable: true
  })
  AND?: TeamProjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectWhereInput], {
    nullable: true
  })
  OR?: TeamProjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectWhereInput], {
    nullable: true
  })
  NOT?: TeamProjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  teamId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  projectId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TeamRelationFilter, {
    nullable: true
  })
  team?: TeamRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectRelationFilter, {
    nullable: true
  })
  project?: ProjectRelationFilter | undefined;
}
