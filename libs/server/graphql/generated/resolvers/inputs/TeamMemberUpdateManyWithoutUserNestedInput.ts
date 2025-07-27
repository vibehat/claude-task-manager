import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamMemberCreateManyUserInputEnvelope } from "../inputs/TeamMemberCreateManyUserInputEnvelope";
import { TeamMemberCreateOrConnectWithoutUserInput } from "../inputs/TeamMemberCreateOrConnectWithoutUserInput";
import { TeamMemberCreateWithoutUserInput } from "../inputs/TeamMemberCreateWithoutUserInput";
import { TeamMemberScalarWhereInput } from "../inputs/TeamMemberScalarWhereInput";
import { TeamMemberUpdateManyWithWhereWithoutUserInput } from "../inputs/TeamMemberUpdateManyWithWhereWithoutUserInput";
import { TeamMemberUpdateWithWhereUniqueWithoutUserInput } from "../inputs/TeamMemberUpdateWithWhereUniqueWithoutUserInput";
import { TeamMemberUpsertWithWhereUniqueWithoutUserInput } from "../inputs/TeamMemberUpsertWithWhereUniqueWithoutUserInput";
import { TeamMemberWhereUniqueInput } from "../inputs/TeamMemberWhereUniqueInput";

@TypeGraphQL.InputType("TeamMemberUpdateManyWithoutUserNestedInput", {})
export class TeamMemberUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [TeamMemberCreateWithoutUserInput], {
    nullable: true
  })
  create?: TeamMemberCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => TeamMemberCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: TeamMemberCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TeamMemberUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TeamMemberScalarWhereInput[] | undefined;
}
