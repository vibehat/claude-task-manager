import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskDependencyWhereInput } from "../inputs/TaskDependencyWhereInput";

@TypeGraphQL.InputType("TaskDependencyListRelationFilter", {})
export class TaskDependencyListRelationFilter {
  @TypeGraphQL.Field(_type => TaskDependencyWhereInput, {
    nullable: true
  })
  every?: TaskDependencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => TaskDependencyWhereInput, {
    nullable: true
  })
  some?: TaskDependencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => TaskDependencyWhereInput, {
    nullable: true
  })
  none?: TaskDependencyWhereInput | undefined;
}
