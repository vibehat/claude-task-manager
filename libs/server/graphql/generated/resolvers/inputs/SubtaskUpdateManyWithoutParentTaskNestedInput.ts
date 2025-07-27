import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubtaskCreateManyParentTaskInputEnvelope } from "../inputs/SubtaskCreateManyParentTaskInputEnvelope";
import { SubtaskCreateOrConnectWithoutParentTaskInput } from "../inputs/SubtaskCreateOrConnectWithoutParentTaskInput";
import { SubtaskCreateWithoutParentTaskInput } from "../inputs/SubtaskCreateWithoutParentTaskInput";
import { SubtaskScalarWhereInput } from "../inputs/SubtaskScalarWhereInput";
import { SubtaskUpdateManyWithWhereWithoutParentTaskInput } from "../inputs/SubtaskUpdateManyWithWhereWithoutParentTaskInput";
import { SubtaskUpdateWithWhereUniqueWithoutParentTaskInput } from "../inputs/SubtaskUpdateWithWhereUniqueWithoutParentTaskInput";
import { SubtaskUpsertWithWhereUniqueWithoutParentTaskInput } from "../inputs/SubtaskUpsertWithWhereUniqueWithoutParentTaskInput";
import { SubtaskWhereUniqueInput } from "../inputs/SubtaskWhereUniqueInput";

@TypeGraphQL.InputType("SubtaskUpdateManyWithoutParentTaskNestedInput", {})
export class SubtaskUpdateManyWithoutParentTaskNestedInput {
  @TypeGraphQL.Field(_type => [SubtaskCreateWithoutParentTaskInput], {
    nullable: true
  })
  create?: SubtaskCreateWithoutParentTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubtaskCreateOrConnectWithoutParentTaskInput], {
    nullable: true
  })
  connectOrCreate?: SubtaskCreateOrConnectWithoutParentTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubtaskUpsertWithWhereUniqueWithoutParentTaskInput], {
    nullable: true
  })
  upsert?: SubtaskUpsertWithWhereUniqueWithoutParentTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => SubtaskCreateManyParentTaskInputEnvelope, {
    nullable: true
  })
  createMany?: SubtaskCreateManyParentTaskInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubtaskWhereUniqueInput], {
    nullable: true
  })
  set?: SubtaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubtaskWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SubtaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubtaskWhereUniqueInput], {
    nullable: true
  })
  delete?: SubtaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubtaskWhereUniqueInput], {
    nullable: true
  })
  connect?: SubtaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubtaskUpdateWithWhereUniqueWithoutParentTaskInput], {
    nullable: true
  })
  update?: SubtaskUpdateWithWhereUniqueWithoutParentTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubtaskUpdateManyWithWhereWithoutParentTaskInput], {
    nullable: true
  })
  updateMany?: SubtaskUpdateManyWithWhereWithoutParentTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubtaskScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SubtaskScalarWhereInput[] | undefined;
}
