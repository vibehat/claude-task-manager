import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutTeamsInput } from "../inputs/ProjectCreateWithoutTeamsInput";
import { ProjectUpdateWithoutTeamsInput } from "../inputs/ProjectUpdateWithoutTeamsInput";
import { ProjectWhereInput } from "../inputs/ProjectWhereInput";

@TypeGraphQL.InputType("ProjectUpsertWithoutTeamsInput", {})
export class ProjectUpsertWithoutTeamsInput {
  @TypeGraphQL.Field(_type => ProjectUpdateWithoutTeamsInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutTeamsInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutTeamsInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutTeamsInput;

  @TypeGraphQL.Field(_type => ProjectWhereInput, {
    nullable: true
  })
  where?: ProjectWhereInput | undefined;
}
