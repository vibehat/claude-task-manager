import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutIssuesInput } from "../inputs/ProjectCreateWithoutIssuesInput";
import { ProjectUpdateWithoutIssuesInput } from "../inputs/ProjectUpdateWithoutIssuesInput";
import { ProjectWhereInput } from "../inputs/ProjectWhereInput";

@TypeGraphQL.InputType("ProjectUpsertWithoutIssuesInput", {})
export class ProjectUpsertWithoutIssuesInput {
  @TypeGraphQL.Field(_type => ProjectUpdateWithoutIssuesInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutIssuesInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutIssuesInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutIssuesInput;

  @TypeGraphQL.Field(_type => ProjectWhereInput, {
    nullable: true
  })
  where?: ProjectWhereInput | undefined;
}
