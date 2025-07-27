import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateNestedOneWithoutMembersInput } from "../inputs/TeamCreateNestedOneWithoutMembersInput";

@TypeGraphQL.InputType("TeamMemberCreateWithoutUserInput", {})
export class TeamMemberCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TeamCreateNestedOneWithoutMembersInput, {
    nullable: false
  })
  team!: TeamCreateNestedOneWithoutMembersInput;
}
