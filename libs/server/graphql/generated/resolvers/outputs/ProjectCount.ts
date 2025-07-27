import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCountIssuesArgs } from "./args/ProjectCountIssuesArgs";
import { ProjectCountTeamsArgs } from "./args/ProjectCountTeamsArgs";

@TypeGraphQL.ObjectType("ProjectCount", {})
export class ProjectCount {
  issues!: number;
  teams!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "issues",
    nullable: false
  })
  getIssues(@TypeGraphQL.Root() root: ProjectCount, @TypeGraphQL.Args() args: ProjectCountIssuesArgs): number {
    return root.issues;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "teams",
    nullable: false
  })
  getTeams(@TypeGraphQL.Root() root: ProjectCount, @TypeGraphQL.Args() args: ProjectCountTeamsArgs): number {
    return root.teams;
  }
}
