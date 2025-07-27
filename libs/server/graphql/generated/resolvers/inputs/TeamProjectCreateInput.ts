import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateNestedOneWithoutTeamsInput } from "../inputs/ProjectCreateNestedOneWithoutTeamsInput";
import { TeamCreateNestedOneWithoutProjectsInput } from "../inputs/TeamCreateNestedOneWithoutProjectsInput";

@TypeGraphQL.InputType("TeamProjectCreateInput", {})
export class TeamProjectCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TeamCreateNestedOneWithoutProjectsInput, {
    nullable: false
  })
  team!: TeamCreateNestedOneWithoutProjectsInput;

  @TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutTeamsInput, {
    nullable: false
  })
  project!: ProjectCreateNestedOneWithoutTeamsInput;
}
