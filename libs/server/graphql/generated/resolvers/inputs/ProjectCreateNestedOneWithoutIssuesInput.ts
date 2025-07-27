import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutIssuesInput } from "../inputs/ProjectCreateOrConnectWithoutIssuesInput";
import { ProjectCreateWithoutIssuesInput } from "../inputs/ProjectCreateWithoutIssuesInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateNestedOneWithoutIssuesInput", {})
export class ProjectCreateNestedOneWithoutIssuesInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
