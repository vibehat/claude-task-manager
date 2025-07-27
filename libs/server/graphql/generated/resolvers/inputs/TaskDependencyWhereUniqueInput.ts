import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { TaskDependencyTaskIdDependsOnIdCompoundUniqueInput } from "../inputs/TaskDependencyTaskIdDependsOnIdCompoundUniqueInput";
import { TaskDependencyWhereInput } from "../inputs/TaskDependencyWhereInput";
import { TaskRelationFilter } from "../inputs/TaskRelationFilter";

@TypeGraphQL.InputType("TaskDependencyWhereUniqueInput", {})
export class TaskDependencyWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TaskDependencyTaskIdDependsOnIdCompoundUniqueInput, {
    nullable: true
  })
  taskId_dependsOnId?: TaskDependencyTaskIdDependsOnIdCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyWhereInput], {
    nullable: true
  })
  AND?: TaskDependencyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyWhereInput], {
    nullable: true
  })
  OR?: TaskDependencyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyWhereInput], {
    nullable: true
  })
  NOT?: TaskDependencyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  taskId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  dependsOnId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => TaskRelationFilter, {
    nullable: true
  })
  task?: TaskRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TaskRelationFilter, {
    nullable: true
  })
  dependsOn?: TaskRelationFilter | undefined;
}
