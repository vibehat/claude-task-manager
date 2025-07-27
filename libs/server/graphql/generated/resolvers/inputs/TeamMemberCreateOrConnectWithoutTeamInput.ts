import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamMemberCreateWithoutTeamInput } from "../inputs/TeamMemberCreateWithoutTeamInput";
import { TeamMemberWhereUniqueInput } from "../inputs/TeamMemberWhereUniqueInput";

@TypeGraphQL.InputType("TeamMemberCreateOrConnectWithoutTeamInput", {})
export class TeamMemberCreateOrConnectWithoutTeamInput {
  @TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput, {
    nullable: false
  })
  where!: TeamMemberWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeamMemberCreateWithoutTeamInput, {
    nullable: false
  })
  create!: TeamMemberCreateWithoutTeamInput;
}
