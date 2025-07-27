import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateNestedOneWithoutTeamsInput } from "../inputs/ProjectCreateNestedOneWithoutTeamsInput";

@TypeGraphQL.InputType("TeamProjectCreateWithoutTeamInput", {})
export class TeamProjectCreateWithoutTeamInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutTeamsInput, {
    nullable: false
  })
  project!: ProjectCreateNestedOneWithoutTeamsInput;
}
