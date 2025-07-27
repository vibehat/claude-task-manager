import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutTeamsInput } from "../inputs/ProjectCreateOrConnectWithoutTeamsInput";
import { ProjectCreateWithoutTeamsInput } from "../inputs/ProjectCreateWithoutTeamsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateNestedOneWithoutTeamsInput", {})
export class ProjectCreateNestedOneWithoutTeamsInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutTeamsInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutTeamsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutTeamsInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutTeamsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
