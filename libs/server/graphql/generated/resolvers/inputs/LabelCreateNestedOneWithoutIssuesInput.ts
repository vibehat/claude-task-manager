import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelCreateOrConnectWithoutIssuesInput } from "../inputs/LabelCreateOrConnectWithoutIssuesInput";
import { LabelCreateWithoutIssuesInput } from "../inputs/LabelCreateWithoutIssuesInput";
import { LabelWhereUniqueInput } from "../inputs/LabelWhereUniqueInput";

@TypeGraphQL.InputType("LabelCreateNestedOneWithoutIssuesInput", {})
export class LabelCreateNestedOneWithoutIssuesInput {
  @TypeGraphQL.Field(_type => LabelCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: LabelCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => LabelCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: LabelCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => LabelWhereUniqueInput, {
    nullable: true
  })
  connect?: LabelWhereUniqueInput | undefined;
}
