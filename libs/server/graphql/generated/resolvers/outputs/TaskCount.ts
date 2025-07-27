import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCountDependenciesArgs } from "./args/TaskCountDependenciesArgs";
import { TaskCountDependentsArgs } from "./args/TaskCountDependentsArgs";
import { TaskCountIssuesArgs } from "./args/TaskCountIssuesArgs";
import { TaskCountSubtasksArgs } from "./args/TaskCountSubtasksArgs";

@TypeGraphQL.ObjectType("TaskCount", {})
export class TaskCount {
  subtasks!: number;
  dependencies!: number;
  dependents!: number;
  issues!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "subtasks",
    nullable: false
  })
  getSubtasks(@TypeGraphQL.Root() root: TaskCount, @TypeGraphQL.Args() args: TaskCountSubtasksArgs): number {
    return root.subtasks;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "dependencies",
    nullable: false
  })
  getDependencies(@TypeGraphQL.Root() root: TaskCount, @TypeGraphQL.Args() args: TaskCountDependenciesArgs): number {
    return root.dependencies;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "dependents",
    nullable: false
  })
  getDependents(@TypeGraphQL.Root() root: TaskCount, @TypeGraphQL.Args() args: TaskCountDependentsArgs): number {
    return root.dependents;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "issues",
    nullable: false
  })
  getIssues(@TypeGraphQL.Root() root: TaskCount, @TypeGraphQL.Args() args: TaskCountIssuesArgs): number {
    return root.issues;
  }
}
