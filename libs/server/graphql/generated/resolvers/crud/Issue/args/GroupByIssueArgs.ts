import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueOrderByWithAggregationInput } from "../../../inputs/IssueOrderByWithAggregationInput";
import { IssueScalarWhereWithAggregatesInput } from "../../../inputs/IssueScalarWhereWithAggregatesInput";
import { IssueWhereInput } from "../../../inputs/IssueWhereInput";
import { IssueScalarFieldEnum } from "../../../../enums/IssueScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByIssueArgs {
  @TypeGraphQL.Field(_type => IssueWhereInput, {
    nullable: true
  })
  where?: IssueWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IssueOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: IssueOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier" | "title" | "description" | "statusId" | "priorityId" | "status" | "priority" | "rank" | "cycleId" | "dueDate" | "taskId" | "subtaskId" | "issueType" | "parentIssueId" | "assigneeId" | "projectId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => IssueScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: IssueScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
