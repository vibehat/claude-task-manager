import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamMemberCreateManyTeamInputEnvelope } from "../inputs/TeamMemberCreateManyTeamInputEnvelope";
import { TeamMemberCreateOrConnectWithoutTeamInput } from "../inputs/TeamMemberCreateOrConnectWithoutTeamInput";
import { TeamMemberCreateWithoutTeamInput } from "../inputs/TeamMemberCreateWithoutTeamInput";
import { TeamMemberWhereUniqueInput } from "../inputs/TeamMemberWhereUniqueInput";

@TypeGraphQL.InputType("TeamMemberCreateNestedManyWithoutTeamInput", {})
export class TeamMemberCreateNestedManyWithoutTeamInput {
  @TypeGraphQL.Field(_type => [TeamMemberCreateWithoutTeamInput], {
    nullable: true
  })
  create?: TeamMemberCreateWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberCreateOrConnectWithoutTeamInput], {
    nullable: true
  })
  connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => TeamMemberCreateManyTeamInputEnvelope, {
    nullable: true
  })
  createMany?: TeamMemberCreateManyTeamInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberWhereUniqueInput], {
    nullable: true
  })
  connect?: TeamMemberWhereUniqueInput[] | undefined;
}
