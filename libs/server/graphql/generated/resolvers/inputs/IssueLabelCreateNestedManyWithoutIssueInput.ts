import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelCreateManyIssueInputEnvelope } from "../inputs/IssueLabelCreateManyIssueInputEnvelope";
import { IssueLabelCreateOrConnectWithoutIssueInput } from "../inputs/IssueLabelCreateOrConnectWithoutIssueInput";
import { IssueLabelCreateWithoutIssueInput } from "../inputs/IssueLabelCreateWithoutIssueInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";

@TypeGraphQL.InputType("IssueLabelCreateNestedManyWithoutIssueInput", {})
export class IssueLabelCreateNestedManyWithoutIssueInput {
  @TypeGraphQL.Field(_type => [IssueLabelCreateWithoutIssueInput], {
    nullable: true
  })
  create?: IssueLabelCreateWithoutIssueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelCreateOrConnectWithoutIssueInput], {
    nullable: true
  })
  connectOrCreate?: IssueLabelCreateOrConnectWithoutIssueInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueLabelCreateManyIssueInputEnvelope, {
    nullable: true
  })
  createMany?: IssueLabelCreateManyIssueInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput], {
    nullable: true
  })
  connect?: IssueLabelWhereUniqueInput[] | undefined;
}
