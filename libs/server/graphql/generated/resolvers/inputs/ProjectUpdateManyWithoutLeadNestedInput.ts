import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateManyLeadInputEnvelope } from "../inputs/ProjectCreateManyLeadInputEnvelope";
import { ProjectCreateOrConnectWithoutLeadInput } from "../inputs/ProjectCreateOrConnectWithoutLeadInput";
import { ProjectCreateWithoutLeadInput } from "../inputs/ProjectCreateWithoutLeadInput";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyWithWhereWithoutLeadInput } from "../inputs/ProjectUpdateManyWithWhereWithoutLeadInput";
import { ProjectUpdateWithWhereUniqueWithoutLeadInput } from "../inputs/ProjectUpdateWithWhereUniqueWithoutLeadInput";
import { ProjectUpsertWithWhereUniqueWithoutLeadInput } from "../inputs/ProjectUpsertWithWhereUniqueWithoutLeadInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpdateManyWithoutLeadNestedInput", {})
export class ProjectUpdateManyWithoutLeadNestedInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutLeadInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutLeadInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutLeadInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutLeadInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpsertWithWhereUniqueWithoutLeadInput], {
    nullable: true
  })
  upsert?: ProjectUpsertWithWhereUniqueWithoutLeadInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateManyLeadInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectCreateManyLeadInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  set?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  delete?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateWithWhereUniqueWithoutLeadInput], {
    nullable: true
  })
  update?: ProjectUpdateWithWhereUniqueWithoutLeadInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateManyWithWhereWithoutLeadInput], {
    nullable: true
  })
  updateMany?: ProjectUpdateManyWithWhereWithoutLeadInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectScalarWhereInput[] | undefined;
}
