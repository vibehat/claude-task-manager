import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamMemberUpdateWithoutUserInput } from "../inputs/TeamMemberUpdateWithoutUserInput";
import { TeamMemberWhereUniqueInput } from "../inputs/TeamMemberWhereUniqueInput";

@TypeGraphQL.InputType("TeamMemberUpdateWithWhereUniqueWithoutUserInput", {})
export class TeamMemberUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput, {
    nullable: false
  })
  where!: TeamMemberWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeamMemberUpdateWithoutUserInput, {
    nullable: false
  })
  data!: TeamMemberUpdateWithoutUserInput;
}
