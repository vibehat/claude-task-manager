import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamMemberCreateWithoutTeamInput } from "../inputs/TeamMemberCreateWithoutTeamInput";
import { TeamMemberUpdateWithoutTeamInput } from "../inputs/TeamMemberUpdateWithoutTeamInput";
import { TeamMemberWhereUniqueInput } from "../inputs/TeamMemberWhereUniqueInput";

@TypeGraphQL.InputType("TeamMemberUpsertWithWhereUniqueWithoutTeamInput", {})
export class TeamMemberUpsertWithWhereUniqueWithoutTeamInput {
  @TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput, {
    nullable: false
  })
  where!: TeamMemberWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeamMemberUpdateWithoutTeamInput, {
    nullable: false
  })
  update!: TeamMemberUpdateWithoutTeamInput;

  @TypeGraphQL.Field(_type => TeamMemberCreateWithoutTeamInput, {
    nullable: false
  })
  create!: TeamMemberCreateWithoutTeamInput;
}
