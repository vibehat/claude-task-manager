import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelCountIssuesArgs } from "./args/LabelCountIssuesArgs";

@TypeGraphQL.ObjectType("LabelCount", {})
export class LabelCount {
  issues!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "issues",
    nullable: false
  })
  getIssues(@TypeGraphQL.Root() root: LabelCount, @TypeGraphQL.Args() args: LabelCountIssuesArgs): number {
    return root.issues;
  }
}
