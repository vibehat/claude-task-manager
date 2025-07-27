import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelCreateManyLabelInputEnvelope } from "../inputs/IssueLabelCreateManyLabelInputEnvelope";
import { IssueLabelCreateOrConnectWithoutLabelInput } from "../inputs/IssueLabelCreateOrConnectWithoutLabelInput";
import { IssueLabelCreateWithoutLabelInput } from "../inputs/IssueLabelCreateWithoutLabelInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";

@TypeGraphQL.InputType("IssueLabelCreateNestedManyWithoutLabelInput", {})
export class IssueLabelCreateNestedManyWithoutLabelInput {
  @TypeGraphQL.Field(_type => [IssueLabelCreateWithoutLabelInput], {
    nullable: true
  })
  create?: IssueLabelCreateWithoutLabelInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelCreateOrConnectWithoutLabelInput], {
    nullable: true
  })
  connectOrCreate?: IssueLabelCreateOrConnectWithoutLabelInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueLabelCreateManyLabelInputEnvelope, {
    nullable: true
  })
  createMany?: IssueLabelCreateManyLabelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput], {
    nullable: true
  })
  connect?: IssueLabelWhereUniqueInput[] | undefined;
}
