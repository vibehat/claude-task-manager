import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubtaskCountIssuesArgs } from "./args/SubtaskCountIssuesArgs";

@TypeGraphQL.ObjectType("SubtaskCount", {})
export class SubtaskCount {
  issues!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "issues",
    nullable: false
  })
  getIssues(@TypeGraphQL.Root() root: SubtaskCount, @TypeGraphQL.Args() args: SubtaskCountIssuesArgs): number {
    return root.issues;
  }
}
