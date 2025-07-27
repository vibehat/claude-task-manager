import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskDependencyCreateManyDependsOnInputEnvelope } from "../inputs/TaskDependencyCreateManyDependsOnInputEnvelope";
import { TaskDependencyCreateOrConnectWithoutDependsOnInput } from "../inputs/TaskDependencyCreateOrConnectWithoutDependsOnInput";
import { TaskDependencyCreateWithoutDependsOnInput } from "../inputs/TaskDependencyCreateWithoutDependsOnInput";
import { TaskDependencyScalarWhereInput } from "../inputs/TaskDependencyScalarWhereInput";
import { TaskDependencyUpdateManyWithWhereWithoutDependsOnInput } from "../inputs/TaskDependencyUpdateManyWithWhereWithoutDependsOnInput";
import { TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput } from "../inputs/TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput";
import { TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput } from "../inputs/TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput";
import { TaskDependencyWhereUniqueInput } from "../inputs/TaskDependencyWhereUniqueInput";

@TypeGraphQL.InputType("TaskDependencyUpdateManyWithoutDependsOnNestedInput", {})
export class TaskDependencyUpdateManyWithoutDependsOnNestedInput {
  @TypeGraphQL.Field(_type => [TaskDependencyCreateWithoutDependsOnInput], {
    nullable: true
  })
  create?: TaskDependencyCreateWithoutDependsOnInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyCreateOrConnectWithoutDependsOnInput], {
    nullable: true
  })
  connectOrCreate?: TaskDependencyCreateOrConnectWithoutDependsOnInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput], {
    nullable: true
  })
  upsert?: TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskDependencyCreateManyDependsOnInputEnvelope, {
    nullable: true
  })
  createMany?: TaskDependencyCreateManyDependsOnInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput], {
    nullable: true
  })
  update?: TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyUpdateManyWithWhereWithoutDependsOnInput], {
    nullable: true
  })
  updateMany?: TaskDependencyUpdateManyWithWhereWithoutDependsOnInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskDependencyScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskDependencyScalarWhereInput[] | undefined;
}
