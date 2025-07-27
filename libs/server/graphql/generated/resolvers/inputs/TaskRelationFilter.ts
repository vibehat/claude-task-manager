import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskWhereInput } from "../inputs/TaskWhereInput";

@TypeGraphQL.InputType("TaskRelationFilter", {})
export class TaskRelationFilter {
  @TypeGraphQL.Field(_type => TaskWhereInput, {
    nullable: true
  })
  is?: TaskWhereInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereInput, {
    nullable: true
  })
  isNot?: TaskWhereInput | undefined;
}
