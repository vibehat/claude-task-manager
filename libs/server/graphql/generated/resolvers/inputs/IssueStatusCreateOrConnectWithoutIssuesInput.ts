import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueStatusCreateWithoutIssuesInput } from "../inputs/IssueStatusCreateWithoutIssuesInput";
import { IssueStatusWhereUniqueInput } from "../inputs/IssueStatusWhereUniqueInput";

@TypeGraphQL.InputType("IssueStatusCreateOrConnectWithoutIssuesInput", {})
export class IssueStatusCreateOrConnectWithoutIssuesInput {
  @TypeGraphQL.Field(_type => IssueStatusWhereUniqueInput, {
    nullable: false
  })
  where!: IssueStatusWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueStatusCreateWithoutIssuesInput, {
    nullable: false
  })
  create!: IssueStatusCreateWithoutIssuesInput;
}
