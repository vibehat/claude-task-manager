import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamMemberCreateManyTeamInputEnvelope } from "../inputs/TeamMemberCreateManyTeamInputEnvelope";
import { TeamMemberCreateOrConnectWithoutTeamInput } from "../inputs/TeamMemberCreateOrConnectWithoutTeamInput";
import { TeamMemberCreateWithoutTeamInput } from "../inputs/TeamMemberCreateWithoutTeamInput";
import { TeamMemberScalarWhereInput } from "../inputs/TeamMemberScalarWhereInput";
import { TeamMemberUpdateManyWithWhereWithoutTeamInput } from "../inputs/TeamMemberUpdateManyWithWhereWithoutTeamInput";
import { TeamMemberUpdateWithWhereUniqueWithoutTeamInput } from "../inputs/TeamMemberUpdateWithWhereUniqueWithoutTeamInput";
import { TeamMemberUpsertWithWhereUniqueWithoutTeamInput } from "../inputs/TeamMemberUpsertWithWhereUniqueWithoutTeamInput";
import { TeamMemberWhereUniqueInput } from "../inputs/TeamMemberWhereUniqueInput";

@TypeGraphQL.InputType("TeamMemberUpdateManyWithoutTeamNestedInput", {})
export class TeamMemberUpdateManyWithoutTeamNestedInput {
  @TypeGraphQL.Field(_type => [TeamMemberCreateWithoutTeamInput], {
    nullable: true
  })
  create?: TeamMemberCreateWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberCreateOrConnectWithoutTeamInput], {
    nullable: true
  })
  connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberUpsertWithWhereUniqueWithoutTeamInput], {
    nullable: true
  })
  upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => TeamMemberCreateManyTeamInputEnvelope, {
    nullable: true
  })
  createMany?: TeamMemberCreateManyTeamInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberWhereUniqueInput], {
    nullable: true
  })
  set?: TeamMemberWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TeamMemberWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberWhereUniqueInput], {
    nullable: true
  })
  delete?: TeamMemberWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberWhereUniqueInput], {
    nullable: true
  })
  connect?: TeamMemberWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberUpdateWithWhereUniqueWithoutTeamInput], {
    nullable: true
  })
  update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberUpdateManyWithWhereWithoutTeamInput], {
    nullable: true
  })
  updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TeamMemberScalarWhereInput[] | undefined;
}
