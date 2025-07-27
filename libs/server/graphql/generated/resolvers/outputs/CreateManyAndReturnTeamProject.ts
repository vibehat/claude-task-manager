import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Project } from "../../models/Project";
import { Team } from "../../models/Team";

@TypeGraphQL.ObjectType("CreateManyAndReturnTeamProject", {})
export class CreateManyAndReturnTeamProject {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  teamId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  projectId!: string;

  @TypeGraphQL.Field(_type => Team, {
    nullable: false
  })
  team!: Team;

  @TypeGraphQL.Field(_type => Project, {
    nullable: false
  })
  project!: Project;
}
