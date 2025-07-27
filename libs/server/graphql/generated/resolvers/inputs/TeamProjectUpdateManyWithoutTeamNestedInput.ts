import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamProjectCreateManyTeamInputEnvelope } from "../inputs/TeamProjectCreateManyTeamInputEnvelope";
import { TeamProjectCreateOrConnectWithoutTeamInput } from "../inputs/TeamProjectCreateOrConnectWithoutTeamInput";
import { TeamProjectCreateWithoutTeamInput } from "../inputs/TeamProjectCreateWithoutTeamInput";
import { TeamProjectScalarWhereInput } from "../inputs/TeamProjectScalarWhereInput";
import { TeamProjectUpdateManyWithWhereWithoutTeamInput } from "../inputs/TeamProjectUpdateManyWithWhereWithoutTeamInput";
import { TeamProjectUpdateWithWhereUniqueWithoutTeamInput } from "../inputs/TeamProjectUpdateWithWhereUniqueWithoutTeamInput";
import { TeamProjectUpsertWithWhereUniqueWithoutTeamInput } from "../inputs/TeamProjectUpsertWithWhereUniqueWithoutTeamInput";
import { TeamProjectWhereUniqueInput } from "../inputs/TeamProjectWhereUniqueInput";

@TypeGraphQL.InputType("TeamProjectUpdateManyWithoutTeamNestedInput", {})
export class TeamProjectUpdateManyWithoutTeamNestedInput {
  @TypeGraphQL.Field(_type => [TeamProjectCreateWithoutTeamInput], {
    nullable: true
  })
  create?: TeamProjectCreateWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectCreateOrConnectWithoutTeamInput], {
    nullable: true
  })
  connectOrCreate?: TeamProjectCreateOrConnectWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectUpsertWithWhereUniqueWithoutTeamInput], {
    nullable: true
  })
  upsert?: TeamProjectUpsertWithWhereUniqueWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => TeamProjectCreateManyTeamInputEnvelope, {
    nullable: true
  })
  createMany?: TeamProjectCreateManyTeamInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectWhereUniqueInput], {
    nullable: true
  })
  set?: TeamProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TeamProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectWhereUniqueInput], {
    nullable: true
  })
  delete?: TeamProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: TeamProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectUpdateWithWhereUniqueWithoutTeamInput], {
    nullable: true
  })
  update?: TeamProjectUpdateWithWhereUniqueWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectUpdateManyWithWhereWithoutTeamInput], {
    nullable: true
  })
  updateMany?: TeamProjectUpdateManyWithWhereWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TeamProjectScalarWhereInput[] | undefined;
}
