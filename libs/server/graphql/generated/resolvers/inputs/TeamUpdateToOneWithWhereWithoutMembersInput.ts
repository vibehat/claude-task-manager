import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamUpdateWithoutMembersInput } from "../inputs/TeamUpdateWithoutMembersInput";
import { TeamWhereInput } from "../inputs/TeamWhereInput";

@TypeGraphQL.InputType("TeamUpdateToOneWithWhereWithoutMembersInput", {})
export class TeamUpdateToOneWithWhereWithoutMembersInput {
  @TypeGraphQL.Field(_type => TeamWhereInput, {
    nullable: true
  })
  where?: TeamWhereInput | undefined;

  @TypeGraphQL.Field(_type => TeamUpdateWithoutMembersInput, {
    nullable: false
  })
  data!: TeamUpdateWithoutMembersInput;
}
