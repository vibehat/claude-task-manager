import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskDependencyOrderByWithRelationInput } from "../../../inputs/TaskDependencyOrderByWithRelationInput";
import { TaskDependencyWhereInput } from "../../../inputs/TaskDependencyWhereInput";
import { TaskDependencyWhereUniqueInput } from "../../../inputs/TaskDependencyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTaskDependencyArgs {
  @TypeGraphQL.Field(_type => TaskDependencyWhereInput, {
    nullable: true
  })
  where?: TaskDependencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TaskDependencyOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput, {
    nullable: true
  })
  cursor?: TaskDependencyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
