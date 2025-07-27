import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskDependencyCreateManyTaskInputEnvelope } from "../inputs/TaskDependencyCreateManyTaskInputEnvelope";
import { TaskDependencyCreateOrConnectWithoutTaskInput } from "../inputs/TaskDependencyCreateOrConnectWithoutTaskInput";
import { TaskDependencyCreateWithoutTaskInput } from "../inputs/TaskDependencyCreateWithoutTaskInput";
import { TaskDependencyWhereUniqueInput } from "../inputs/TaskDependencyWhereUniqueInput";

@TypeGraphQL.InputType("TaskDependencyCreateNestedManyWithoutTaskInput", {})
export class TaskDependencyCreateNestedManyWithoutTaskInput {
  @TypeGraphQL.Field(_type => [TaskDependencyCreateWithoutTaskInput], {
    nullable: true
  })
  create?: TaskDependencyCreateWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyCreateOrConnectWithoutTaskInput], {
    nullable: true
  })
  connectOrCreate?: TaskDependencyCreateOrConnectWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskDependencyCreateManyTaskInputEnvelope, {
    nullable: true
  })
  createMany?: TaskDependencyCreateManyTaskInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskDependencyWhereUniqueInput[] | undefined;
}
