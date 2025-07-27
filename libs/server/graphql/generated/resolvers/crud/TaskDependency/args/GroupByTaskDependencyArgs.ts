import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskDependencyOrderByWithAggregationInput } from "../../../inputs/TaskDependencyOrderByWithAggregationInput";
import { TaskDependencyScalarWhereWithAggregatesInput } from "../../../inputs/TaskDependencyScalarWhereWithAggregatesInput";
import { TaskDependencyWhereInput } from "../../../inputs/TaskDependencyWhereInput";
import { TaskDependencyScalarFieldEnum } from "../../../../enums/TaskDependencyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTaskDependencyArgs {
  @TypeGraphQL.Field(_type => TaskDependencyWhereInput, {
    nullable: true
  })
  where?: TaskDependencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TaskDependencyOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "taskId" | "dependsOnId" | "createdAt">;

  @TypeGraphQL.Field(_type => TaskDependencyScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TaskDependencyScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
