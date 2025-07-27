import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskDependencyUpdateInput } from "../../../inputs/TaskDependencyUpdateInput";
import { TaskDependencyWhereUniqueInput } from "../../../inputs/TaskDependencyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTaskDependencyArgs {
  @TypeGraphQL.Field(_type => TaskDependencyUpdateInput, {
    nullable: false
  })
  data!: TaskDependencyUpdateInput;

  @TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput, {
    nullable: false
  })
  where!: TaskDependencyWhereUniqueInput;
}
