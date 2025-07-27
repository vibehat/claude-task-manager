import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutDependenciesInput } from "../inputs/TaskCreateOrConnectWithoutDependenciesInput";
import { TaskCreateWithoutDependenciesInput } from "../inputs/TaskCreateWithoutDependenciesInput";
import { TaskUpdateToOneWithWhereWithoutDependenciesInput } from "../inputs/TaskUpdateToOneWithWhereWithoutDependenciesInput";
import { TaskUpsertWithoutDependenciesInput } from "../inputs/TaskUpsertWithoutDependenciesInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateOneRequiredWithoutDependenciesNestedInput", {})
export class TaskUpdateOneRequiredWithoutDependenciesNestedInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutDependenciesInput, {
    nullable: true
  })
  create?: TaskCreateWithoutDependenciesInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutDependenciesInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutDependenciesInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpsertWithoutDependenciesInput, {
    nullable: true
  })
  upsert?: TaskUpsertWithoutDependenciesInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateToOneWithWhereWithoutDependenciesInput, {
    nullable: true
  })
  update?: TaskUpdateToOneWithWhereWithoutDependenciesInput | undefined;
}
