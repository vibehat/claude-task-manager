import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskDependencyCreateManyTaskInputEnvelope } from "../inputs/TaskDependencyCreateManyTaskInputEnvelope";
import { TaskDependencyCreateOrConnectWithoutTaskInput } from "../inputs/TaskDependencyCreateOrConnectWithoutTaskInput";
import { TaskDependencyCreateWithoutTaskInput } from "../inputs/TaskDependencyCreateWithoutTaskInput";
import { TaskDependencyScalarWhereInput } from "../inputs/TaskDependencyScalarWhereInput";
import { TaskDependencyUpdateManyWithWhereWithoutTaskInput } from "../inputs/TaskDependencyUpdateManyWithWhereWithoutTaskInput";
import { TaskDependencyUpdateWithWhereUniqueWithoutTaskInput } from "../inputs/TaskDependencyUpdateWithWhereUniqueWithoutTaskInput";
import { TaskDependencyUpsertWithWhereUniqueWithoutTaskInput } from "../inputs/TaskDependencyUpsertWithWhereUniqueWithoutTaskInput";
import { TaskDependencyWhereUniqueInput } from "../inputs/TaskDependencyWhereUniqueInput";

@TypeGraphQL.InputType("TaskDependencyUpdateManyWithoutTaskNestedInput", {})
export class TaskDependencyUpdateManyWithoutTaskNestedInput {
  @TypeGraphQL.Field(_type => [TaskDependencyCreateWithoutTaskInput], {
    nullable: true
  })
  create?: TaskDependencyCreateWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyCreateOrConnectWithoutTaskInput], {
    nullable: true
  })
  connectOrCreate?: TaskDependencyCreateOrConnectWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyUpsertWithWhereUniqueWithoutTaskInput], {
    nullable: true
  })
  upsert?: TaskDependencyUpsertWithWhereUniqueWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskDependencyCreateManyTaskInputEnvelope, {
    nullable: true
  })
  createMany?: TaskDependencyCreateManyTaskInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyWhereUniqueInput], {
    nullable: true
  })
  set?: TaskDependencyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TaskDependencyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyWhereUniqueInput], {
    nullable: true
  })
  delete?: TaskDependencyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskDependencyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyUpdateWithWhereUniqueWithoutTaskInput], {
    nullable: true
  })
  update?: TaskDependencyUpdateWithWhereUniqueWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyUpdateManyWithWhereWithoutTaskInput], {
    nullable: true
  })
  updateMany?: TaskDependencyUpdateManyWithWhereWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskDependencyScalarWhereInput[] | undefined;
}
