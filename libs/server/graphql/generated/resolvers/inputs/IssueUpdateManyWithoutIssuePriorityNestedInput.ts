import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyIssuePriorityInputEnvelope } from "../inputs/IssueCreateManyIssuePriorityInputEnvelope";
import { IssueCreateOrConnectWithoutIssuePriorityInput } from "../inputs/IssueCreateOrConnectWithoutIssuePriorityInput";
import { IssueCreateWithoutIssuePriorityInput } from "../inputs/IssueCreateWithoutIssuePriorityInput";
import { IssueScalarWhereInput } from "../inputs/IssueScalarWhereInput";
import { IssueUpdateManyWithWhereWithoutIssuePriorityInput } from "../inputs/IssueUpdateManyWithWhereWithoutIssuePriorityInput";
import { IssueUpdateWithWhereUniqueWithoutIssuePriorityInput } from "../inputs/IssueUpdateWithWhereUniqueWithoutIssuePriorityInput";
import { IssueUpsertWithWhereUniqueWithoutIssuePriorityInput } from "../inputs/IssueUpsertWithWhereUniqueWithoutIssuePriorityInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpdateManyWithoutIssuePriorityNestedInput", {})
export class IssueUpdateManyWithoutIssuePriorityNestedInput {
  @TypeGraphQL.Field(_type => [IssueCreateWithoutIssuePriorityInput], {
    nullable: true
  })
  create?: IssueCreateWithoutIssuePriorityInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutIssuePriorityInput], {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutIssuePriorityInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpsertWithWhereUniqueWithoutIssuePriorityInput], {
    nullable: true
  })
  upsert?: IssueUpsertWithWhereUniqueWithoutIssuePriorityInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueCreateManyIssuePriorityInputEnvelope, {
    nullable: true
  })
  createMany?: IssueCreateManyIssuePriorityInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [IssueUpdateWithWhereUniqueWithoutIssuePriorityInput], {
    nullable: true
  })
  update?: IssueUpdateWithWhereUniqueWithoutIssuePriorityInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpdateManyWithWhereWithoutIssuePriorityInput], {
    nullable: true
  })
  updateMany?: IssueUpdateManyWithWhereWithoutIssuePriorityInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IssueScalarWhereInput[] | undefined;
}
