import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyAssigneeInputEnvelope } from "../inputs/IssueCreateManyAssigneeInputEnvelope";
import { IssueCreateOrConnectWithoutAssigneeInput } from "../inputs/IssueCreateOrConnectWithoutAssigneeInput";
import { IssueCreateWithoutAssigneeInput } from "../inputs/IssueCreateWithoutAssigneeInput";
import { IssueScalarWhereInput } from "../inputs/IssueScalarWhereInput";
import { IssueUpdateManyWithWhereWithoutAssigneeInput } from "../inputs/IssueUpdateManyWithWhereWithoutAssigneeInput";
import { IssueUpdateWithWhereUniqueWithoutAssigneeInput } from "../inputs/IssueUpdateWithWhereUniqueWithoutAssigneeInput";
import { IssueUpsertWithWhereUniqueWithoutAssigneeInput } from "../inputs/IssueUpsertWithWhereUniqueWithoutAssigneeInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpdateManyWithoutAssigneeNestedInput", {})
export class IssueUpdateManyWithoutAssigneeNestedInput {
  @TypeGraphQL.Field(_type => [IssueCreateWithoutAssigneeInput], {
    nullable: true
  })
  create?: IssueCreateWithoutAssigneeInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutAssigneeInput], {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutAssigneeInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpsertWithWhereUniqueWithoutAssigneeInput], {
    nullable: true
  })
  upsert?: IssueUpsertWithWhereUniqueWithoutAssigneeInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueCreateManyAssigneeInputEnvelope, {
    nullable: true
  })
  createMany?: IssueCreateManyAssigneeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [IssueUpdateWithWhereUniqueWithoutAssigneeInput], {
    nullable: true
  })
  update?: IssueUpdateWithWhereUniqueWithoutAssigneeInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpdateManyWithWhereWithoutAssigneeInput], {
    nullable: true
  })
  updateMany?: IssueUpdateManyWithWhereWithoutAssigneeInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IssueScalarWhereInput[] | undefined;
}
