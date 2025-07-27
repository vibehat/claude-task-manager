import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManySubtaskInputEnvelope } from "../inputs/IssueCreateManySubtaskInputEnvelope";
import { IssueCreateOrConnectWithoutSubtaskInput } from "../inputs/IssueCreateOrConnectWithoutSubtaskInput";
import { IssueCreateWithoutSubtaskInput } from "../inputs/IssueCreateWithoutSubtaskInput";
import { IssueScalarWhereInput } from "../inputs/IssueScalarWhereInput";
import { IssueUpdateManyWithWhereWithoutSubtaskInput } from "../inputs/IssueUpdateManyWithWhereWithoutSubtaskInput";
import { IssueUpdateWithWhereUniqueWithoutSubtaskInput } from "../inputs/IssueUpdateWithWhereUniqueWithoutSubtaskInput";
import { IssueUpsertWithWhereUniqueWithoutSubtaskInput } from "../inputs/IssueUpsertWithWhereUniqueWithoutSubtaskInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpdateManyWithoutSubtaskNestedInput", {})
export class IssueUpdateManyWithoutSubtaskNestedInput {
  @TypeGraphQL.Field(_type => [IssueCreateWithoutSubtaskInput], {
    nullable: true
  })
  create?: IssueCreateWithoutSubtaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutSubtaskInput], {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutSubtaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpsertWithWhereUniqueWithoutSubtaskInput], {
    nullable: true
  })
  upsert?: IssueUpsertWithWhereUniqueWithoutSubtaskInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueCreateManySubtaskInputEnvelope, {
    nullable: true
  })
  createMany?: IssueCreateManySubtaskInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  set?: IssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  disconnect?: IssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  delete?: IssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  connect?: IssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpdateWithWhereUniqueWithoutSubtaskInput], {
    nullable: true
  })
  update?: IssueUpdateWithWhereUniqueWithoutSubtaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpdateManyWithWhereWithoutSubtaskInput], {
    nullable: true
  })
  updateMany?: IssueUpdateManyWithWhereWithoutSubtaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IssueScalarWhereInput[] | undefined;
}
