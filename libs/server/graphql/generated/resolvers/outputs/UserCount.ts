import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountAssignedIssuesArgs } from "./args/UserCountAssignedIssuesArgs";
import { UserCountLedProjectsArgs } from "./args/UserCountLedProjectsArgs";
import { UserCountTeamsArgs } from "./args/UserCountTeamsArgs";

@TypeGraphQL.ObjectType("UserCount", {})
export class UserCount {
  assignedIssues!: number;
  teams!: number;
  ledProjects!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "assignedIssues",
    nullable: false
  })
  getAssignedIssues(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountAssignedIssuesArgs): number {
    return root.assignedIssues;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "teams",
    nullable: false
  })
  getTeams(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountTeamsArgs): number {
    return root.teams;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "ledProjects",
    nullable: false
  })
  getLedProjects(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountLedProjectsArgs): number {
    return root.ledProjects;
  }
}
