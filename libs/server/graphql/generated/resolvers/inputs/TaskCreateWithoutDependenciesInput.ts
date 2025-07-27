import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateNestedManyWithoutTaskInput } from "../inputs/IssueCreateNestedManyWithoutTaskInput";
import { SubtaskCreateNestedManyWithoutParentTaskInput } from "../inputs/SubtaskCreateNestedManyWithoutParentTaskInput";
import { TaskDependencyCreateNestedManyWithoutDependsOnInput } from "../inputs/TaskDependencyCreateNestedManyWithoutDependsOnInput";

@TypeGraphQL.InputType("TaskCreateWithoutDependenciesInput", {})
export class TaskCreateWithoutDependenciesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  details?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  testStrategy?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  priority!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  complexity?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => SubtaskCreateNestedManyWithoutParentTaskInput, {
    nullable: true
  })
  subtasks?: SubtaskCreateNestedManyWithoutParentTaskInput | undefined;

  @TypeGraphQL.Field(_type => TaskDependencyCreateNestedManyWithoutDependsOnInput, {
    nullable: true
  })
  dependents?: TaskDependencyCreateNestedManyWithoutDependsOnInput | undefined;

  @TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutTaskInput, {
    nullable: true
  })
  issues?: IssueCreateNestedManyWithoutTaskInput | undefined;
}
