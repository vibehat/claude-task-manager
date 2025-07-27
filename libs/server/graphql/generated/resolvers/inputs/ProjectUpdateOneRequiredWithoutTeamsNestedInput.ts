import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutTeamsInput } from "../inputs/ProjectCreateOrConnectWithoutTeamsInput";
import { ProjectCreateWithoutTeamsInput } from "../inputs/ProjectCreateWithoutTeamsInput";
import { ProjectUpdateToOneWithWhereWithoutTeamsInput } from "../inputs/ProjectUpdateToOneWithWhereWithoutTeamsInput";
import { ProjectUpsertWithoutTeamsInput } from "../inputs/ProjectUpsertWithoutTeamsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpdateOneRequiredWithoutTeamsNestedInput", {})
export class ProjectUpdateOneRequiredWithoutTeamsNestedInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutTeamsInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutTeamsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutTeamsInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutTeamsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpsertWithoutTeamsInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutTeamsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateToOneWithWhereWithoutTeamsInput, {
    nullable: true
  })
  update?: ProjectUpdateToOneWithWhereWithoutTeamsInput | undefined;
}
