import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateManyLeadInputEnvelope } from "../inputs/ProjectCreateManyLeadInputEnvelope";
import { ProjectCreateOrConnectWithoutLeadInput } from "../inputs/ProjectCreateOrConnectWithoutLeadInput";
import { ProjectCreateWithoutLeadInput } from "../inputs/ProjectCreateWithoutLeadInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateNestedManyWithoutLeadInput", {})
export class ProjectCreateNestedManyWithoutLeadInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutLeadInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutLeadInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutLeadInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutLeadInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateManyLeadInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectCreateManyLeadInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput[] | undefined;
}
