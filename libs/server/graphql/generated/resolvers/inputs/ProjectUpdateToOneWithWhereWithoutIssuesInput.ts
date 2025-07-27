import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectUpdateWithoutIssuesInput } from "../inputs/ProjectUpdateWithoutIssuesInput";
import { ProjectWhereInput } from "../inputs/ProjectWhereInput";

@TypeGraphQL.InputType("ProjectUpdateToOneWithWhereWithoutIssuesInput", {})
export class ProjectUpdateToOneWithWhereWithoutIssuesInput {
  @TypeGraphQL.Field(_type => ProjectWhereInput, {
    nullable: true
  })
  where?: ProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutIssuesInput, {
    nullable: false
  })
  data!: ProjectUpdateWithoutIssuesInput;
}
