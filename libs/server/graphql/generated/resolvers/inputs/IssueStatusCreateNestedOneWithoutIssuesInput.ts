import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueStatusCreateOrConnectWithoutIssuesInput } from "../inputs/IssueStatusCreateOrConnectWithoutIssuesInput";
import { IssueStatusCreateWithoutIssuesInput } from "../inputs/IssueStatusCreateWithoutIssuesInput";
import { IssueStatusWhereUniqueInput } from "../inputs/IssueStatusWhereUniqueInput";

@TypeGraphQL.InputType("IssueStatusCreateNestedOneWithoutIssuesInput", {})
export class IssueStatusCreateNestedOneWithoutIssuesInput {
  @TypeGraphQL.Field(_type => IssueStatusCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: IssueStatusCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => IssueStatusCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: IssueStatusCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => IssueStatusWhereUniqueInput, {
    nullable: true
  })
  connect?: IssueStatusWhereUniqueInput | undefined;
}
