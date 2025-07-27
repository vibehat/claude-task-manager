import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectUpdateWithoutTeamsInput } from "../inputs/ProjectUpdateWithoutTeamsInput";
import { ProjectWhereInput } from "../inputs/ProjectWhereInput";

@TypeGraphQL.InputType("ProjectUpdateToOneWithWhereWithoutTeamsInput", {})
export class ProjectUpdateToOneWithWhereWithoutTeamsInput {
  @TypeGraphQL.Field(_type => ProjectWhereInput, {
    nullable: true
  })
  where?: ProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutTeamsInput, {
    nullable: false
  })
  data!: ProjectUpdateWithoutTeamsInput;
}
