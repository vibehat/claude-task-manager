import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssuePriorityCountIssuesArgs } from "./args/IssuePriorityCountIssuesArgs";

@TypeGraphQL.ObjectType("IssuePriorityCount", {})
export class IssuePriorityCount {
  issues!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "issues",
    nullable: false
  })
  getIssues(@TypeGraphQL.Root() root: IssuePriorityCount, @TypeGraphQL.Args() args: IssuePriorityCountIssuesArgs): number {
    return root.issues;
  }
}
