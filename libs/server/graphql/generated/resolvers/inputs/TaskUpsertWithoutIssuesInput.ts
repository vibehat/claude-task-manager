import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutIssuesInput } from "../inputs/TaskCreateWithoutIssuesInput";
import { TaskUpdateWithoutIssuesInput } from "../inputs/TaskUpdateWithoutIssuesInput";
import { TaskWhereInput } from "../inputs/TaskWhereInput";

@TypeGraphQL.InputType("TaskUpsertWithoutIssuesInput", {})
export class TaskUpsertWithoutIssuesInput {
  @TypeGraphQL.Field(_type => TaskUpdateWithoutIssuesInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutIssuesInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutIssuesInput, {
    nullable: false
  })
  create!: TaskCreateWithoutIssuesInput;

  @TypeGraphQL.Field(_type => TaskWhereInput, {
    nullable: true
  })
  where?: TaskWhereInput | undefined;
}
