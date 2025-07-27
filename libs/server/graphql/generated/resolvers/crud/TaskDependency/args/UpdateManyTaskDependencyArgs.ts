import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskDependencyUpdateManyMutationInput } from "../../../inputs/TaskDependencyUpdateManyMutationInput";
import { TaskDependencyWhereInput } from "../../../inputs/TaskDependencyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTaskDependencyArgs {
  @TypeGraphQL.Field(_type => TaskDependencyUpdateManyMutationInput, {
    nullable: false
  })
  data!: TaskDependencyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TaskDependencyWhereInput, {
    nullable: true
  })
  where?: TaskDependencyWhereInput | undefined;
}
