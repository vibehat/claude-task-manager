import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleCreateNestedManyWithoutTeamInput } from "../inputs/CycleCreateNestedManyWithoutTeamInput";
import { TeamMemberCreateNestedManyWithoutTeamInput } from "../inputs/TeamMemberCreateNestedManyWithoutTeamInput";

@TypeGraphQL.InputType("TeamCreateWithoutProjectsInput", {})
export class TeamCreateWithoutProjectsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  icon!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  joined?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  color!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TeamMemberCreateNestedManyWithoutTeamInput, {
    nullable: true
  })
  members?: TeamMemberCreateNestedManyWithoutTeamInput | undefined;

  @TypeGraphQL.Field(_type => CycleCreateNestedManyWithoutTeamInput, {
    nullable: true
  })
  cycles?: CycleCreateNestedManyWithoutTeamInput | undefined;
}
