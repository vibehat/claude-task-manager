import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Cycle } from "../models/Cycle";
import { IssueLabel } from "../models/IssueLabel";
import { IssuePriority } from "../models/IssuePriority";
import { IssueStatus } from "../models/IssueStatus";
import { Project } from "../models/Project";
import { Subtask } from "../models/Subtask";
import { Task } from "../models/Task";
import { User } from "../models/User";
import { IssueCount } from "../resolvers/outputs/IssueCount";

@TypeGraphQL.ObjectType("Issue", {})
export class Issue {
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
  statusId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priorityId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priority?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  rank!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cycleId?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dueDate?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  taskId?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subtaskId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  issueType!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parentIssueId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assigneeId?: string | null;

  assignee?: User | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  projectId?: string | null;

  project?: Project | null;

  cycle?: Cycle | null;

  task?: Task | null;

  subtask?: Subtask | null;

  issueStatus?: IssueStatus | null;

  issuePriority?: IssuePriority | null;

  labels?: IssueLabel[];

  parentIssue?: Issue | null;

  subIssues?: Issue[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => IssueCount, {
    nullable: true
  })
  _count?: IssueCount | null;
}
