import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamMemberCreateWithoutUserInput } from "../inputs/TeamMemberCreateWithoutUserInput";
import { TeamMemberUpdateWithoutUserInput } from "../inputs/TeamMemberUpdateWithoutUserInput";
import { TeamMemberWhereUniqueInput } from "../inputs/TeamMemberWhereUniqueInput";

@TypeGraphQL.InputType("TeamMemberUpsertWithWhereUniqueWithoutUserInput", {})
export class TeamMemberUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput, {
    nullable: false
  })
  where!: TeamMemberWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeamMemberUpdateWithoutUserInput, {
    nullable: false
  })
  update!: TeamMemberUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => TeamMemberCreateWithoutUserInput, {
    nullable: false
  })
  create!: TeamMemberCreateWithoutUserInput;
}
