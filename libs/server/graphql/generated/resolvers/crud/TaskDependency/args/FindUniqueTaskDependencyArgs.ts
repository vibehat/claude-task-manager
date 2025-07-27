import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskDependencyWhereUniqueInput } from "../../../inputs/TaskDependencyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTaskDependencyArgs {
  @TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput, {
    nullable: false
  })
  where!: TaskDependencyWhereUniqueInput;
}
