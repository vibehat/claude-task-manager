import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskDependencyCreateManyInput } from "../../../inputs/TaskDependencyCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTaskDependencyArgs {
  @TypeGraphQL.Field(_type => [TaskDependencyCreateManyInput], {
    nullable: false
  })
  data!: TaskDependencyCreateManyInput[];
}
