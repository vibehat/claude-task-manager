import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyIssueStatusInputEnvelope } from "../inputs/IssueCreateManyIssueStatusInputEnvelope";
import { IssueCreateOrConnectWithoutIssueStatusInput } from "../inputs/IssueCreateOrConnectWithoutIssueStatusInput";
import { IssueCreateWithoutIssueStatusInput } from "../inputs/IssueCreateWithoutIssueStatusInput";
import { IssueScalarWhereInput } from "../inputs/IssueScalarWhereInput";
import { IssueUpdateManyWithWhereWithoutIssueStatusInput } from "../inputs/IssueUpdateManyWithWhereWithoutIssueStatusInput";
import { IssueUpdateWithWhereUniqueWithoutIssueStatusInput } from "../inputs/IssueUpdateWithWhereUniqueWithoutIssueStatusInput";
import { IssueUpsertWithWhereUniqueWithoutIssueStatusInput } from "../inputs/IssueUpsertWithWhereUniqueWithoutIssueStatusInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpdateManyWithoutIssueStatusNestedInput", {})
export class IssueUpdateManyWithoutIssueStatusNestedInput {
  @TypeGraphQL.Field(_type => [IssueCreateWithoutIssueStatusInput], {
    nullable: true
  })
  create?: IssueCreateWithoutIssueStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutIssueStatusInput], {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutIssueStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpsertWithWhereUniqueWithoutIssueStatusInput], {
    nullable: true
  })
  upsert?: IssueUpsertWithWhereUniqueWithoutIssueStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueCreateManyIssueStatusInputEnvelope, {
    nullable: true
  })
  createMany?: IssueCreateManyIssueStatusInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [IssueUpdateWithWhereUniqueWithoutIssueStatusInput], {
    nullable: true
  })
  update?: IssueUpdateWithWhereUniqueWithoutIssueStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpdateManyWithWhereWithoutIssueStatusInput], {
    nullable: true
  })
  updateMany?: IssueUpdateManyWithWhereWithoutIssueStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IssueScalarWhereInput[] | undefined;
}
