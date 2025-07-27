import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("TaskDependencyScalarWhereInput", {})
export class TaskDependencyScalarWhereInput {
  @TypeGraphQL.Field(_type => [TaskDependencyScalarWhereInput], {
    nullable: true
  })
  AND?: TaskDependencyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyScalarWhereInput], {
    nullable: true
  })
  OR?: TaskDependencyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyScalarWhereInput], {
    nullable: true
  })
  NOT?: TaskDependencyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  taskId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  dependsOnId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
