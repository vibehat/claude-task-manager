import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutLeadInput } from "../inputs/ProjectCreateWithoutLeadInput";
import { ProjectUpdateWithoutLeadInput } from "../inputs/ProjectUpdateWithoutLeadInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpsertWithWhereUniqueWithoutLeadInput", {})
export class ProjectUpsertWithWhereUniqueWithoutLeadInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutLeadInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutLeadInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutLeadInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutLeadInput;
}
