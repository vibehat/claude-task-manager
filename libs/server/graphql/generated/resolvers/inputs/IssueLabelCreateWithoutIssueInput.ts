import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelCreateNestedOneWithoutIssuesInput } from "../inputs/LabelCreateNestedOneWithoutIssuesInput";

@TypeGraphQL.InputType("IssueLabelCreateWithoutIssueInput", {})
export class IssueLabelCreateWithoutIssueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => LabelCreateNestedOneWithoutIssuesInput, {
    nullable: false
  })
  label!: LabelCreateNestedOneWithoutIssuesInput;
}
