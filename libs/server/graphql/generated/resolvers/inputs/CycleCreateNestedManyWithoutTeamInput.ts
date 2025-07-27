import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleCreateManyTeamInputEnvelope } from "../inputs/CycleCreateManyTeamInputEnvelope";
import { CycleCreateOrConnectWithoutTeamInput } from "../inputs/CycleCreateOrConnectWithoutTeamInput";
import { CycleCreateWithoutTeamInput } from "../inputs/CycleCreateWithoutTeamInput";
import { CycleWhereUniqueInput } from "../inputs/CycleWhereUniqueInput";

@TypeGraphQL.InputType("CycleCreateNestedManyWithoutTeamInput", {})
export class CycleCreateNestedManyWithoutTeamInput {
  @TypeGraphQL.Field(_type => [CycleCreateWithoutTeamInput], {
    nullable: true
  })
  create?: CycleCreateWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [CycleCreateOrConnectWithoutTeamInput], {
    nullable: true
  })
  connectOrCreate?: CycleCreateOrConnectWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => CycleCreateManyTeamInputEnvelope, {
    nullable: true
  })
  createMany?: CycleCreateManyTeamInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CycleWhereUniqueInput], {
    nullable: true
  })
  connect?: CycleWhereUniqueInput[] | undefined;
}
