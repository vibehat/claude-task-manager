import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Cycle } from "../../../models/Cycle";
import { Issue } from "../../../models/Issue";
import { IssueLabel } from "../../../models/IssueLabel";
import { IssuePriority } from "../../../models/IssuePriority";
import { IssueStatus } from "../../../models/IssueStatus";
import { Project } from "../../../models/Project";
import { Subtask } from "../../../models/Subtask";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { IssueAssigneeArgs } from "./args/IssueAssigneeArgs";
import { IssueCycleArgs } from "./args/IssueCycleArgs";
import { IssueIssuePriorityArgs } from "./args/IssueIssuePriorityArgs";
import { IssueIssueStatusArgs } from "./args/IssueIssueStatusArgs";
import { IssueLabelsArgs } from "./args/IssueLabelsArgs";
import { IssueParentIssueArgs } from "./args/IssueParentIssueArgs";
import { IssueProjectArgs } from "./args/IssueProjectArgs";
import { IssueSubIssuesArgs } from "./args/IssueSubIssuesArgs";
import { IssueSubtaskArgs } from "./args/IssueSubtaskArgs";
import { IssueTaskArgs } from "./args/IssueTaskArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Issue)
export class IssueRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async assignee(@TypeGraphQL.Root() issue: Issue, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: IssueAssigneeArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issue.findUniqueOrThrow({
      where: {
        id: issue.id,
      },
    }).assignee({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Project, {
    nullable: true
  })
  async project(@TypeGraphQL.Root() issue: Issue, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: IssueProjectArgs): Promise<Project | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issue.findUniqueOrThrow({
      where: {
        id: issue.id,
      },
    }).project({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Cycle, {
    nullable: true
  })
  async cycle(@TypeGraphQL.Root() issue: Issue, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: IssueCycleArgs): Promise<Cycle | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issue.findUniqueOrThrow({
      where: {
        id: issue.id,
      },
    }).cycle({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Task, {
    nullable: true
  })
  async task(@TypeGraphQL.Root() issue: Issue, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: IssueTaskArgs): Promise<Task | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issue.findUniqueOrThrow({
      where: {
        id: issue.id,
      },
    }).task({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Subtask, {
    nullable: true
  })
  async subtask(@TypeGraphQL.Root() issue: Issue, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: IssueSubtaskArgs): Promise<Subtask | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issue.findUniqueOrThrow({
      where: {
        id: issue.id,
      },
    }).subtask({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => IssueStatus, {
    nullable: true
  })
  async issueStatus(@TypeGraphQL.Root() issue: Issue, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: IssueIssueStatusArgs): Promise<IssueStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issue.findUniqueOrThrow({
      where: {
        id: issue.id,
      },
    }).issueStatus({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => IssuePriority, {
    nullable: true
  })
  async issuePriority(@TypeGraphQL.Root() issue: Issue, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: IssueIssuePriorityArgs): Promise<IssuePriority | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issue.findUniqueOrThrow({
      where: {
        id: issue.id,
      },
    }).issuePriority({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [IssueLabel], {
    nullable: false
  })
  async labels(@TypeGraphQL.Root() issue: Issue, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: IssueLabelsArgs): Promise<IssueLabel[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issue.findUniqueOrThrow({
      where: {
        id: issue.id,
      },
    }).labels({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Issue, {
    nullable: true
  })
  async parentIssue(@TypeGraphQL.Root() issue: Issue, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: IssueParentIssueArgs): Promise<Issue | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issue.findUniqueOrThrow({
      where: {
        id: issue.id,
      },
    }).parentIssue({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Issue], {
    nullable: false
  })
  async subIssues(@TypeGraphQL.Root() issue: Issue, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: IssueSubIssuesArgs): Promise<Issue[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issue.findUniqueOrThrow({
      where: {
        id: issue.id,
      },
    }).subIssues({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
