import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnIssueAssigneeArgs } from "./args/CreateManyAndReturnIssueAssigneeArgs";
import { CreateManyAndReturnIssueCycleArgs } from "./args/CreateManyAndReturnIssueCycleArgs";
import { CreateManyAndReturnIssueIssuePriorityArgs } from "./args/CreateManyAndReturnIssueIssuePriorityArgs";
import { CreateManyAndReturnIssueIssueStatusArgs } from "./args/CreateManyAndReturnIssueIssueStatusArgs";
import { CreateManyAndReturnIssueParentIssueArgs } from "./args/CreateManyAndReturnIssueParentIssueArgs";
import { CreateManyAndReturnIssueProjectArgs } from "./args/CreateManyAndReturnIssueProjectArgs";
import { CreateManyAndReturnIssueSubtaskArgs } from "./args/CreateManyAndReturnIssueSubtaskArgs";
import { CreateManyAndReturnIssueTaskArgs } from "./args/CreateManyAndReturnIssueTaskArgs";
import { Cycle } from "../../models/Cycle";
import { Issue } from "../../models/Issue";
import { IssuePriority } from "../../models/IssuePriority";
import { IssueStatus } from "../../models/IssueStatus";
import { Project } from "../../models/Project";
import { Subtask } from "../../models/Subtask";
import { Task } from "../../models/Task";
import { User } from "../../models/User";

@TypeGraphQL.ObjectType("CreateManyAndReturnIssue", {})
export class CreateManyAndReturnIssue {
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

  assignee!: User | null;
  project!: Project | null;
  cycle!: Cycle | null;
  task!: Task | null;
  subtask!: Subtask | null;
  issueStatus!: IssueStatus | null;
  issuePriority!: IssuePriority | null;
  parentIssue!: Issue | null;

  @TypeGraphQL.Field(_type => User, {
    name: "assignee",
    nullable: true
  })
  getAssignee(@TypeGraphQL.Root() root: CreateManyAndReturnIssue, @TypeGraphQL.Args() args: CreateManyAndReturnIssueAssigneeArgs): User | null {
    return root.assignee;
  }

  @TypeGraphQL.Field(_type => Project, {
    name: "project",
    nullable: true
  })
  getProject(@TypeGraphQL.Root() root: CreateManyAndReturnIssue, @TypeGraphQL.Args() args: CreateManyAndReturnIssueProjectArgs): Project | null {
    return root.project;
  }

  @TypeGraphQL.Field(_type => Cycle, {
    name: "cycle",
    nullable: true
  })
  getCycle(@TypeGraphQL.Root() root: CreateManyAndReturnIssue, @TypeGraphQL.Args() args: CreateManyAndReturnIssueCycleArgs): Cycle | null {
    return root.cycle;
  }

  @TypeGraphQL.Field(_type => Task, {
    name: "task",
    nullable: true
  })
  getTask(@TypeGraphQL.Root() root: CreateManyAndReturnIssue, @TypeGraphQL.Args() args: CreateManyAndReturnIssueTaskArgs): Task | null {
    return root.task;
  }

  @TypeGraphQL.Field(_type => Subtask, {
    name: "subtask",
    nullable: true
  })
  getSubtask(@TypeGraphQL.Root() root: CreateManyAndReturnIssue, @TypeGraphQL.Args() args: CreateManyAndReturnIssueSubtaskArgs): Subtask | null {
    return root.subtask;
  }

  @TypeGraphQL.Field(_type => IssueStatus, {
    name: "issueStatus",
    nullable: true
  })
  getIssueStatus(@TypeGraphQL.Root() root: CreateManyAndReturnIssue, @TypeGraphQL.Args() args: CreateManyAndReturnIssueIssueStatusArgs): IssueStatus | null {
    return root.issueStatus;
  }

  @TypeGraphQL.Field(_type => IssuePriority, {
    name: "issuePriority",
    nullable: true
  })
  getIssuePriority(@TypeGraphQL.Root() root: CreateManyAndReturnIssue, @TypeGraphQL.Args() args: CreateManyAndReturnIssueIssuePriorityArgs): IssuePriority | null {
    return root.issuePriority;
  }

  @TypeGraphQL.Field(_type => Issue, {
    name: "parentIssue",
    nullable: true
  })
  getParentIssue(@TypeGraphQL.Root() root: CreateManyAndReturnIssue, @TypeGraphQL.Args() args: CreateManyAndReturnIssueParentIssueArgs): Issue | null {
    return root.parentIssue;
  }
}
