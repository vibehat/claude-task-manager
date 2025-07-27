import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateWithoutMembersInput } from "../inputs/TeamCreateWithoutMembersInput";
import { TeamUpdateWithoutMembersInput } from "../inputs/TeamUpdateWithoutMembersInput";
import { TeamWhereInput } from "../inputs/TeamWhereInput";

@TypeGraphQL.InputType("TeamUpsertWithoutMembersInput", {})
export class TeamUpsertWithoutMembersInput {
  @TypeGraphQL.Field(_type => TeamUpdateWithoutMembersInput, {
    nullable: false
  })
  update!: TeamUpdateWithoutMembersInput;

  @TypeGraphQL.Field(_type => TeamCreateWithoutMembersInput, {
    nullable: false
  })
  create!: TeamCreateWithoutMembersInput;

  @TypeGraphQL.Field(_type => TeamWhereInput, {
    nullable: true
  })
  where?: TeamWhereInput | undefined;
}
