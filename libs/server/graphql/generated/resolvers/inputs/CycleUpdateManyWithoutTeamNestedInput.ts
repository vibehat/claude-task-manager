import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleCreateManyTeamInputEnvelope } from "../inputs/CycleCreateManyTeamInputEnvelope";
import { CycleCreateOrConnectWithoutTeamInput } from "../inputs/CycleCreateOrConnectWithoutTeamInput";
import { CycleCreateWithoutTeamInput } from "../inputs/CycleCreateWithoutTeamInput";
import { CycleScalarWhereInput } from "../inputs/CycleScalarWhereInput";
import { CycleUpdateManyWithWhereWithoutTeamInput } from "../inputs/CycleUpdateManyWithWhereWithoutTeamInput";
import { CycleUpdateWithWhereUniqueWithoutTeamInput } from "../inputs/CycleUpdateWithWhereUniqueWithoutTeamInput";
import { CycleUpsertWithWhereUniqueWithoutTeamInput } from "../inputs/CycleUpsertWithWhereUniqueWithoutTeamInput";
import { CycleWhereUniqueInput } from "../inputs/CycleWhereUniqueInput";

@TypeGraphQL.InputType("CycleUpdateManyWithoutTeamNestedInput", {})
export class CycleUpdateManyWithoutTeamNestedInput {
  @TypeGraphQL.Field(_type => [CycleCreateWithoutTeamInput], {
    nullable: true
  })
  create?: CycleCreateWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [CycleCreateOrConnectWithoutTeamInput], {
    nullable: true
  })
  connectOrCreate?: CycleCreateOrConnectWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [CycleUpsertWithWhereUniqueWithoutTeamInput], {
    nullable: true
  })
  upsert?: CycleUpsertWithWhereUniqueWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => CycleCreateManyTeamInputEnvelope, {
    nullable: true
  })
  createMany?: CycleCreateManyTeamInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CycleWhereUniqueInput], {
    nullable: true
  })
  set?: CycleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CycleWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CycleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CycleWhereUniqueInput], {
    nullable: true
  })
  delete?: CycleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CycleWhereUniqueInput], {
    nullable: true
  })
  connect?: CycleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CycleUpdateWithWhereUniqueWithoutTeamInput], {
    nullable: true
  })
  update?: CycleUpdateWithWhereUniqueWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [CycleUpdateManyWithWhereWithoutTeamInput], {
    nullable: true
  })
  updateMany?: CycleUpdateManyWithWhereWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [CycleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CycleScalarWhereInput[] | undefined;
}
