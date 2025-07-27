import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutTeamsInput } from "../inputs/UserCreateNestedOneWithoutTeamsInput";

@TypeGraphQL.InputType("TeamMemberCreateWithoutTeamInput", {})
export class TeamMemberCreateWithoutTeamInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTeamsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutTeamsInput;
}
