import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamProjectCreateManyTeamInputEnvelope } from "../inputs/TeamProjectCreateManyTeamInputEnvelope";
import { TeamProjectCreateOrConnectWithoutTeamInput } from "../inputs/TeamProjectCreateOrConnectWithoutTeamInput";
import { TeamProjectCreateWithoutTeamInput } from "../inputs/TeamProjectCreateWithoutTeamInput";
import { TeamProjectWhereUniqueInput } from "../inputs/TeamProjectWhereUniqueInput";

@TypeGraphQL.InputType("TeamProjectCreateNestedManyWithoutTeamInput", {})
export class TeamProjectCreateNestedManyWithoutTeamInput {
  @TypeGraphQL.Field(_type => [TeamProjectCreateWithoutTeamInput], {
    nullable: true
  })
  create?: TeamProjectCreateWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectCreateOrConnectWithoutTeamInput], {
    nullable: true
  })
  connectOrCreate?: TeamProjectCreateOrConnectWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => TeamProjectCreateManyTeamInputEnvelope, {
    nullable: true
  })
  createMany?: TeamProjectCreateManyTeamInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: TeamProjectWhereUniqueInput[] | undefined;
}
