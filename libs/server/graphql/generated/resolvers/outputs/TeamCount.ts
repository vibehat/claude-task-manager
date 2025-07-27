import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCountCyclesArgs } from "./args/TeamCountCyclesArgs";
import { TeamCountMembersArgs } from "./args/TeamCountMembersArgs";
import { TeamCountProjectsArgs } from "./args/TeamCountProjectsArgs";

@TypeGraphQL.ObjectType("TeamCount", {})
export class TeamCount {
  members!: number;
  projects!: number;
  cycles!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "members",
    nullable: false
  })
  getMembers(@TypeGraphQL.Root() root: TeamCount, @TypeGraphQL.Args() args: TeamCountMembersArgs): number {
    return root.members;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "projects",
    nullable: false
  })
  getProjects(@TypeGraphQL.Root() root: TeamCount, @TypeGraphQL.Args() args: TeamCountProjectsArgs): number {
    return root.projects;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "cycles",
    nullable: false
  })
  getCycles(@TypeGraphQL.Root() root: TeamCount, @TypeGraphQL.Args() args: TeamCountCyclesArgs): number {
    return root.cycles;
  }
}
