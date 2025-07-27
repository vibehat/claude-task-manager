import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelCreateManyLabelInputEnvelope } from "../inputs/IssueLabelCreateManyLabelInputEnvelope";
import { IssueLabelCreateOrConnectWithoutLabelInput } from "../inputs/IssueLabelCreateOrConnectWithoutLabelInput";
import { IssueLabelCreateWithoutLabelInput } from "../inputs/IssueLabelCreateWithoutLabelInput";
import { IssueLabelScalarWhereInput } from "../inputs/IssueLabelScalarWhereInput";
import { IssueLabelUpdateManyWithWhereWithoutLabelInput } from "../inputs/IssueLabelUpdateManyWithWhereWithoutLabelInput";
import { IssueLabelUpdateWithWhereUniqueWithoutLabelInput } from "../inputs/IssueLabelUpdateWithWhereUniqueWithoutLabelInput";
import { IssueLabelUpsertWithWhereUniqueWithoutLabelInput } from "../inputs/IssueLabelUpsertWithWhereUniqueWithoutLabelInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";

@TypeGraphQL.InputType("IssueLabelUpdateManyWithoutLabelNestedInput", {})
export class IssueLabelUpdateManyWithoutLabelNestedInput {
  @TypeGraphQL.Field(_type => [IssueLabelCreateWithoutLabelInput], {
    nullable: true
  })
  create?: IssueLabelCreateWithoutLabelInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelCreateOrConnectWithoutLabelInput], {
    nullable: true
  })
  connectOrCreate?: IssueLabelCreateOrConnectWithoutLabelInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelUpsertWithWhereUniqueWithoutLabelInput], {
    nullable: true
  })
  upsert?: IssueLabelUpsertWithWhereUniqueWithoutLabelInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueLabelCreateManyLabelInputEnvelope, {
    nullable: true
  })
  createMany?: IssueLabelCreateManyLabelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput], {
    nullable: true
  })
  set?: IssueLabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput], {
    nullable: true
  })
  disconnect?: IssueLabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput], {
    nullable: true
  })
  delete?: IssueLabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput], {
    nullable: true
  })
  connect?: IssueLabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelUpdateWithWhereUniqueWithoutLabelInput], {
    nullable: true
  })
  update?: IssueLabelUpdateWithWhereUniqueWithoutLabelInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelUpdateManyWithWhereWithoutLabelInput], {
    nullable: true
  })
  updateMany?: IssueLabelUpdateManyWithWhereWithoutLabelInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IssueLabelScalarWhereInput[] | undefined;
}
