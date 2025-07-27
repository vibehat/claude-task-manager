import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyTaskInputEnvelope } from "../inputs/IssueCreateManyTaskInputEnvelope";
import { IssueCreateOrConnectWithoutTaskInput } from "../inputs/IssueCreateOrConnectWithoutTaskInput";
import { IssueCreateWithoutTaskInput } from "../inputs/IssueCreateWithoutTaskInput";
import { IssueScalarWhereInput } from "../inputs/IssueScalarWhereInput";
import { IssueUpdateManyWithWhereWithoutTaskInput } from "../inputs/IssueUpdateManyWithWhereWithoutTaskInput";
import { IssueUpdateWithWhereUniqueWithoutTaskInput } from "../inputs/IssueUpdateWithWhereUniqueWithoutTaskInput";
import { IssueUpsertWithWhereUniqueWithoutTaskInput } from "../inputs/IssueUpsertWithWhereUniqueWithoutTaskInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpdateManyWithoutTaskNestedInput", {})
export class IssueUpdateManyWithoutTaskNestedInput {
  @TypeGraphQL.Field(_type => [IssueCreateWithoutTaskInput], {
    nullable: true
  })
  create?: IssueCreateWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutTaskInput], {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpsertWithWhereUniqueWithoutTaskInput], {
    nullable: true
  })
  upsert?: IssueUpsertWithWhereUniqueWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueCreateManyTaskInputEnvelope, {
    nullable: true
  })
  createMany?: IssueCreateManyTaskInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [IssueUpdateWithWhereUniqueWithoutTaskInput], {
    nullable: true
  })
  update?: IssueUpdateWithWhereUniqueWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpdateManyWithWhereWithoutTaskInput], {
    nullable: true
  })
  updateMany?: IssueUpdateManyWithWhereWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IssueScalarWhereInput[] | undefined;
}
