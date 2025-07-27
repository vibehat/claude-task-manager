import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamMemberCreateManyUserInputEnvelope } from "../inputs/TeamMemberCreateManyUserInputEnvelope";
import { TeamMemberCreateOrConnectWithoutUserInput } from "../inputs/TeamMemberCreateOrConnectWithoutUserInput";
import { TeamMemberCreateWithoutUserInput } from "../inputs/TeamMemberCreateWithoutUserInput";
import { TeamMemberWhereUniqueInput } from "../inputs/TeamMemberWhereUniqueInput";

@TypeGraphQL.InputType("TeamMemberCreateNestedManyWithoutUserInput", {})
export class TeamMemberCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [TeamMemberCreateWithoutUserInput], {
    nullable: true
  })
  create?: TeamMemberCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => TeamMemberCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: TeamMemberCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberWhereUniqueInput], {
    nullable: true
  })
  connect?: TeamMemberWhereUniqueInput[] | undefined;
}
