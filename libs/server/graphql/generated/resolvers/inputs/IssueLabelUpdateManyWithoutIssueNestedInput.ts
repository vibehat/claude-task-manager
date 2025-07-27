import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelCreateManyIssueInputEnvelope } from "../inputs/IssueLabelCreateManyIssueInputEnvelope";
import { IssueLabelCreateOrConnectWithoutIssueInput } from "../inputs/IssueLabelCreateOrConnectWithoutIssueInput";
import { IssueLabelCreateWithoutIssueInput } from "../inputs/IssueLabelCreateWithoutIssueInput";
import { IssueLabelScalarWhereInput } from "../inputs/IssueLabelScalarWhereInput";
import { IssueLabelUpdateManyWithWhereWithoutIssueInput } from "../inputs/IssueLabelUpdateManyWithWhereWithoutIssueInput";
import { IssueLabelUpdateWithWhereUniqueWithoutIssueInput } from "../inputs/IssueLabelUpdateWithWhereUniqueWithoutIssueInput";
import { IssueLabelUpsertWithWhereUniqueWithoutIssueInput } from "../inputs/IssueLabelUpsertWithWhereUniqueWithoutIssueInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";

@TypeGraphQL.InputType("IssueLabelUpdateManyWithoutIssueNestedInput", {})
export class IssueLabelUpdateManyWithoutIssueNestedInput {
  @TypeGraphQL.Field(_type => [IssueLabelCreateWithoutIssueInput], {
    nullable: true
  })
  create?: IssueLabelCreateWithoutIssueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelCreateOrConnectWithoutIssueInput], {
    nullable: true
  })
  connectOrCreate?: IssueLabelCreateOrConnectWithoutIssueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelUpsertWithWhereUniqueWithoutIssueInput], {
    nullable: true
  })
  upsert?: IssueLabelUpsertWithWhereUniqueWithoutIssueInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueLabelCreateManyIssueInputEnvelope, {
    nullable: true
  })
  createMany?: IssueLabelCreateManyIssueInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput], {
    nullable: true
  })
  set?: IssueLabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput], {
    nullable: true
  })
  disconnect?: IssueLabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput], {
    nullable: true
  })
  delete?: IssueLabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput], {
    nullable: true
  })
  connect?: IssueLabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelUpdateWithWhereUniqueWithoutIssueInput], {
    nullable: true
  })
  update?: IssueLabelUpdateWithWhereUniqueWithoutIssueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelUpdateManyWithWhereWithoutIssueInput], {
    nullable: true
  })
  updateMany?: IssueLabelUpdateManyWithWhereWithoutIssueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IssueLabelScalarWhereInput[] | undefined;
}
