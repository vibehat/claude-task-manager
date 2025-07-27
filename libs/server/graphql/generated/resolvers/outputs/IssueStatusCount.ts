import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueStatusCountIssuesArgs } from "./args/IssueStatusCountIssuesArgs";

@TypeGraphQL.ObjectType("IssueStatusCount", {})
export class IssueStatusCount {
  issues!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "issues",
    nullable: false
  })
  getIssues(@TypeGraphQL.Root() root: IssueStatusCount, @TypeGraphQL.Args() args: IssueStatusCountIssuesArgs): number {
    return root.issues;
  }
}
