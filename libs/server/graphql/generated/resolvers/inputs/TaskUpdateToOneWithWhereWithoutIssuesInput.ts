import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskUpdateWithoutIssuesInput } from "../inputs/TaskUpdateWithoutIssuesInput";
import { TaskWhereInput } from "../inputs/TaskWhereInput";

@TypeGraphQL.InputType("TaskUpdateToOneWithWhereWithoutIssuesInput", {})
export class TaskUpdateToOneWithWhereWithoutIssuesInput {
  @TypeGraphQL.Field(_type => TaskWhereInput, {
    nullable: true
  })
  where?: TaskWhereInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutIssuesInput, {
    nullable: false
  })
  data!: TaskUpdateWithoutIssuesInput;
}
