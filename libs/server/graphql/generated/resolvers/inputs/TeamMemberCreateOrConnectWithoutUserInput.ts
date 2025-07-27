import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamMemberCreateWithoutUserInput } from "../inputs/TeamMemberCreateWithoutUserInput";
import { TeamMemberWhereUniqueInput } from "../inputs/TeamMemberWhereUniqueInput";

@TypeGraphQL.InputType("TeamMemberCreateOrConnectWithoutUserInput", {})
export class TeamMemberCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput, {
    nullable: false
  })
  where!: TeamMemberWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeamMemberCreateWithoutUserInput, {
    nullable: false
  })
  create!: TeamMemberCreateWithoutUserInput;
}
