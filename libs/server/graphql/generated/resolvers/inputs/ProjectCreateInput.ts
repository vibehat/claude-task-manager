import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateNestedManyWithoutProjectInput } from "../inputs/IssueCreateNestedManyWithoutProjectInput";
import { TeamProjectCreateNestedManyWithoutProjectInput } from "../inputs/TeamProjectCreateNestedManyWithoutProjectInput";
import { UserCreateNestedOneWithoutLedProjectsInput } from "../inputs/UserCreateNestedOneWithoutLedProjectsInput";

@TypeGraphQL.InputType("ProjectCreateInput", {})
export class ProjectCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  color?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icon?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  percentComplete?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  health?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutProjectInput, {
    nullable: true
  })
  issues?: IssueCreateNestedManyWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLedProjectsInput, {
    nullable: true
  })
  lead?: UserCreateNestedOneWithoutLedProjectsInput | undefined;

  @TypeGraphQL.Field(_type => TeamProjectCreateNestedManyWithoutProjectInput, {
    nullable: true
  })
  teams?: TeamProjectCreateNestedManyWithoutProjectInput | undefined;
}
