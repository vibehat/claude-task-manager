import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubtaskCreateManyParentTaskInputEnvelope } from "../inputs/SubtaskCreateManyParentTaskInputEnvelope";
import { SubtaskCreateOrConnectWithoutParentTaskInput } from "../inputs/SubtaskCreateOrConnectWithoutParentTaskInput";
import { SubtaskCreateWithoutParentTaskInput } from "../inputs/SubtaskCreateWithoutParentTaskInput";
import { SubtaskWhereUniqueInput } from "../inputs/SubtaskWhereUniqueInput";

@TypeGraphQL.InputType("SubtaskCreateNestedManyWithoutParentTaskInput", {})
export class SubtaskCreateNestedManyWithoutParentTaskInput {
  @TypeGraphQL.Field(_type => [SubtaskCreateWithoutParentTaskInput], {
    nullable: true
  })
  create?: SubtaskCreateWithoutParentTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubtaskCreateOrConnectWithoutParentTaskInput], {
    nullable: true
  })
  connectOrCreate?: SubtaskCreateOrConnectWithoutParentTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => SubtaskCreateManyParentTaskInputEnvelope, {
    nullable: true
  })
  createMany?: SubtaskCreateManyParentTaskInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubtaskWhereUniqueInput], {
    nullable: true
  })
  connect?: SubtaskWhereUniqueInput[] | undefined;
}
