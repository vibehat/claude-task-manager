import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutIssuesInput } from "../inputs/ProjectCreateOrConnectWithoutIssuesInput";
import { ProjectCreateWithoutIssuesInput } from "../inputs/ProjectCreateWithoutIssuesInput";
import { ProjectUpdateToOneWithWhereWithoutIssuesInput } from "../inputs/ProjectUpdateToOneWithWhereWithoutIssuesInput";
import { ProjectUpsertWithoutIssuesInput } from "../inputs/ProjectUpsertWithoutIssuesInput";
import { ProjectWhereInput } from "../inputs/ProjectWhereInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpdateOneWithoutIssuesNestedInput", {})
export class ProjectUpdateOneWithoutIssuesNestedInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpsertWithoutIssuesInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereInput, {
    nullable: true
  })
  disconnect?: ProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereInput, {
    nullable: true
  })
  delete?: ProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateToOneWithWhereWithoutIssuesInput, {
    nullable: true
  })
  update?: ProjectUpdateToOneWithWhereWithoutIssuesInput | undefined;
}
