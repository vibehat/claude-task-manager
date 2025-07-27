import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueStatusCreateOrConnectWithoutIssuesInput } from "../inputs/IssueStatusCreateOrConnectWithoutIssuesInput";
import { IssueStatusCreateWithoutIssuesInput } from "../inputs/IssueStatusCreateWithoutIssuesInput";
import { IssueStatusUpdateToOneWithWhereWithoutIssuesInput } from "../inputs/IssueStatusUpdateToOneWithWhereWithoutIssuesInput";
import { IssueStatusUpsertWithoutIssuesInput } from "../inputs/IssueStatusUpsertWithoutIssuesInput";
import { IssueStatusWhereInput } from "../inputs/IssueStatusWhereInput";
import { IssueStatusWhereUniqueInput } from "../inputs/IssueStatusWhereUniqueInput";

@TypeGraphQL.InputType("IssueStatusUpdateOneWithoutIssuesNestedInput", {})
export class IssueStatusUpdateOneWithoutIssuesNestedInput {
  @TypeGraphQL.Field(_type => IssueStatusCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: IssueStatusCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => IssueStatusCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: IssueStatusCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => IssueStatusUpsertWithoutIssuesInput, {
    nullable: true
  })
  upsert?: IssueStatusUpsertWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => IssueStatusWhereInput, {
    nullable: true
  })
  disconnect?: IssueStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => IssueStatusWhereInput, {
    nullable: true
  })
  delete?: IssueStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => IssueStatusWhereUniqueInput, {
    nullable: true
  })
  connect?: IssueStatusWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => IssueStatusUpdateToOneWithWhereWithoutIssuesInput, {
    nullable: true
  })
  update?: IssueStatusUpdateToOneWithWhereWithoutIssuesInput | undefined;
}
