import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateNestedOneWithoutMembersInput } from "../inputs/TeamCreateNestedOneWithoutMembersInput";
import { UserCreateNestedOneWithoutTeamsInput } from "../inputs/UserCreateNestedOneWithoutTeamsInput";

@TypeGraphQL.InputType("TeamMemberCreateInput", {})
export class TeamMemberCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TeamCreateNestedOneWithoutMembersInput, {
    nullable: false
  })
  team!: TeamCreateNestedOneWithoutMembersInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTeamsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutTeamsInput;
}
