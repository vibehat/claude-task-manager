import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskDependencyCreateManyDependsOnInputEnvelope } from "../inputs/TaskDependencyCreateManyDependsOnInputEnvelope";
import { TaskDependencyCreateOrConnectWithoutDependsOnInput } from "../inputs/TaskDependencyCreateOrConnectWithoutDependsOnInput";
import { TaskDependencyCreateWithoutDependsOnInput } from "../inputs/TaskDependencyCreateWithoutDependsOnInput";
import { TaskDependencyWhereUniqueInput } from "../inputs/TaskDependencyWhereUniqueInput";

@TypeGraphQL.InputType("TaskDependencyCreateNestedManyWithoutDependsOnInput", {})
export class TaskDependencyCreateNestedManyWithoutDependsOnInput {
  @TypeGraphQL.Field(_type => [TaskDependencyCreateWithoutDependsOnInput], {
    nullable: true
  })
  create?: TaskDependencyCreateWithoutDependsOnInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyCreateOrConnectWithoutDependsOnInput], {
    nullable: true
  })
  connectOrCreate?: TaskDependencyCreateOrConnectWithoutDependsOnInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskDependencyCreateManyDependsOnInputEnvelope, {
    nullable: true
  })
  createMany?: TaskDependencyCreateManyDependsOnInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskDependencyWhereUniqueInput[] | undefined;
}
