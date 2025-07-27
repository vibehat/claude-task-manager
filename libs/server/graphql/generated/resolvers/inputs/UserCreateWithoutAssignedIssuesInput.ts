import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateNestedManyWithoutLeadInput } from "../inputs/ProjectCreateNestedManyWithoutLeadInput";
import { TeamMemberCreateNestedManyWithoutUserInput } from "../inputs/TeamMemberCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutAssignedIssuesInput", {})
export class UserCreateWithoutAssignedIssuesInput {
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
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatarUrl?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  role?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  joinedDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  teamIds?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TeamMemberCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  teams?: TeamMemberCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedManyWithoutLeadInput, {
    nullable: true
  })
  ledProjects?: ProjectCreateNestedManyWithoutLeadInput | undefined;
}
