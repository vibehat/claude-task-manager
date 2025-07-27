import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskDependencyCreateInput } from "../../../inputs/TaskDependencyCreateInput";
import { TaskDependencyUpdateInput } from "../../../inputs/TaskDependencyUpdateInput";
import { TaskDependencyWhereUniqueInput } from "../../../inputs/TaskDependencyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTaskDependencyArgs {
  @TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput, {
    nullable: false
  })
  where!: TaskDependencyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskDependencyCreateInput, {
    nullable: false
  })
  create!: TaskDependencyCreateInput;

  @TypeGraphQL.Field(_type => TaskDependencyUpdateInput, {
    nullable: false
  })
  update!: TaskDependencyUpdateInput;
}
