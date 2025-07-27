import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueAvgAggregate } from "../outputs/IssueAvgAggregate";
import { IssueCountAggregate } from "../outputs/IssueCountAggregate";
import { IssueMaxAggregate } from "../outputs/IssueMaxAggregate";
import { IssueMinAggregate } from "../outputs/IssueMinAggregate";
import { IssueSumAggregate } from "../outputs/IssueSumAggregate";

@TypeGraphQL.ObjectType("IssueGroupBy", {})
export class IssueGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statusId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priorityId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priority!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  rank!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cycleId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dueDate!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  taskId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subtaskId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  issueType!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parentIssueId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assigneeId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  projectId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => IssueCountAggregate, {
    nullable: true
  })
  _count!: IssueCountAggregate | null;

  @TypeGraphQL.Field(_type => IssueAvgAggregate, {
    nullable: true
  })
  _avg!: IssueAvgAggregate | null;

  @TypeGraphQL.Field(_type => IssueSumAggregate, {
    nullable: true
  })
  _sum!: IssueSumAggregate | null;

  @TypeGraphQL.Field(_type => IssueMinAggregate, {
    nullable: true
  })
  _min!: IssueMinAggregate | null;

  @TypeGraphQL.Field(_type => IssueMaxAggregate, {
    nullable: true
  })
  _max!: IssueMaxAggregate | null;
}
