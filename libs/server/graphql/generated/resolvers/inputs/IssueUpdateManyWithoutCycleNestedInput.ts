import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyCycleInputEnvelope } from "../inputs/IssueCreateManyCycleInputEnvelope";
import { IssueCreateOrConnectWithoutCycleInput } from "../inputs/IssueCreateOrConnectWithoutCycleInput";
import { IssueCreateWithoutCycleInput } from "../inputs/IssueCreateWithoutCycleInput";
import { IssueScalarWhereInput } from "../inputs/IssueScalarWhereInput";
import { IssueUpdateManyWithWhereWithoutCycleInput } from "../inputs/IssueUpdateManyWithWhereWithoutCycleInput";
import { IssueUpdateWithWhereUniqueWithoutCycleInput } from "../inputs/IssueUpdateWithWhereUniqueWithoutCycleInput";
import { IssueUpsertWithWhereUniqueWithoutCycleInput } from "../inputs/IssueUpsertWithWhereUniqueWithoutCycleInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpdateManyWithoutCycleNestedInput", {})
export class IssueUpdateManyWithoutCycleNestedInput {
  @TypeGraphQL.Field(_type => [IssueCreateWithoutCycleInput], {
    nullable: true
  })
  create?: IssueCreateWithoutCycleInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutCycleInput], {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutCycleInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpsertWithWhereUniqueWithoutCycleInput], {
    nullable: true
  })
  upsert?: IssueUpsertWithWhereUniqueWithoutCycleInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueCreateManyCycleInputEnvelope, {
    nullable: true
  })
  createMany?: IssueCreateManyCycleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  set?: IssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  disconnect?: IssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  delete?: IssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  connect?: IssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpdateWithWhereUniqueWithoutCycleInput], {
    nullable: true
  })
  update?: IssueUpdateWithWhereUniqueWithoutCycleInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpdateManyWithWhereWithoutCycleInput], {
    nullable: true
  })
  updateMany?: IssueUpdateManyWithWhereWithoutCycleInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IssueScalarWhereInput[] | undefined;
}
