import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamMemberUpdateWithoutTeamInput } from "../inputs/TeamMemberUpdateWithoutTeamInput";
import { TeamMemberWhereUniqueInput } from "../inputs/TeamMemberWhereUniqueInput";

@TypeGraphQL.InputType("TeamMemberUpdateWithWhereUniqueWithoutTeamInput", {})
export class TeamMemberUpdateWithWhereUniqueWithoutTeamInput {
  @TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput, {
    nullable: false
  })
  where!: TeamMemberWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeamMemberUpdateWithoutTeamInput, {
    nullable: false
  })
  data!: TeamMemberUpdateWithoutTeamInput;
}
