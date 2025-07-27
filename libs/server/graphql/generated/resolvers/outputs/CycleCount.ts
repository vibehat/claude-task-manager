import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleCountIssuesArgs } from "./args/CycleCountIssuesArgs";

@TypeGraphQL.ObjectType("CycleCount", {})
export class CycleCount {
  issues!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "issues",
    nullable: false
  })
  getIssues(@TypeGraphQL.Root() root: CycleCount, @TypeGraphQL.Args() args: CycleCountIssuesArgs): number {
    return root.issues;
  }
}
