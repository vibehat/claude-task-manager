import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamMemberScalarWhereInput } from "../inputs/TeamMemberScalarWhereInput";
import { TeamMemberUpdateManyMutationInput } from "../inputs/TeamMemberUpdateManyMutationInput";

@TypeGraphQL.InputType("TeamMemberUpdateManyWithWhereWithoutTeamInput", {})
export class TeamMemberUpdateManyWithWhereWithoutTeamInput {
  @TypeGraphQL.Field(_type => TeamMemberScalarWhereInput, {
    nullable: false
  })
  where!: TeamMemberScalarWhereInput;

  @TypeGraphQL.Field(_type => TeamMemberUpdateManyMutationInput, {
    nullable: false
  })
  data!: TeamMemberUpdateManyMutationInput;
}
