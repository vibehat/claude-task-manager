import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskDependencyCreateInput } from "../../../inputs/TaskDependencyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTaskDependencyArgs {
  @TypeGraphQL.Field(_type => TaskDependencyCreateInput, {
    nullable: false
  })
  data!: TaskDependencyCreateInput;
}
