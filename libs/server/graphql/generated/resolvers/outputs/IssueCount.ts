import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCountLabelsArgs } from "./args/IssueCountLabelsArgs";
import { IssueCountSubIssuesArgs } from "./args/IssueCountSubIssuesArgs";

@TypeGraphQL.ObjectType("IssueCount", {})
export class IssueCount {
  labels!: number;
  subIssues!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "labels",
    nullable: false
  })
  getLabels(@TypeGraphQL.Root() root: IssueCount, @TypeGraphQL.Args() args: IssueCountLabelsArgs): number {
    return root.labels;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "subIssues",
    nullable: false
  })
  getSubIssues(@TypeGraphQL.Root() root: IssueCount, @TypeGraphQL.Args() args: IssueCountSubIssuesArgs): number {
    return root.subIssues;
  }
}
