import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskDependencyWhereInput } from "../../inputs/TaskDependencyWhereInput";

@TypeGraphQL.ArgsType()
export class TaskCountDependenciesArgs {
  @TypeGraphQL.Field(_type => TaskDependencyWhereInput, {
    nullable: true
  })
  where?: TaskDependencyWhereInput | undefined;
}
