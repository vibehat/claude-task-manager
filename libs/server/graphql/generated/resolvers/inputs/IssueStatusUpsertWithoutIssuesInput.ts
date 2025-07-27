import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueStatusCreateWithoutIssuesInput } from "../inputs/IssueStatusCreateWithoutIssuesInput";
import { IssueStatusUpdateWithoutIssuesInput } from "../inputs/IssueStatusUpdateWithoutIssuesInput";
import { IssueStatusWhereInput } from "../inputs/IssueStatusWhereInput";

@TypeGraphQL.InputType("IssueStatusUpsertWithoutIssuesInput", {})
export class IssueStatusUpsertWithoutIssuesInput {
  @TypeGraphQL.Field(_type => IssueStatusUpdateWithoutIssuesInput, {
    nullable: false
  })
  update!: IssueStatusUpdateWithoutIssuesInput;

  @TypeGraphQL.Field(_type => IssueStatusCreateWithoutIssuesInput, {
    nullable: false
  })
  create!: IssueStatusCreateWithoutIssuesInput;

  @TypeGraphQL.Field(_type => IssueStatusWhereInput, {
    nullable: true
  })
  where?: IssueStatusWhereInput | undefined;
}
