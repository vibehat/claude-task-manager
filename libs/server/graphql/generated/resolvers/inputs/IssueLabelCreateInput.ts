import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateNestedOneWithoutLabelsInput } from "../inputs/IssueCreateNestedOneWithoutLabelsInput";
import { LabelCreateNestedOneWithoutIssuesInput } from "../inputs/LabelCreateNestedOneWithoutIssuesInput";

@TypeGraphQL.InputType("IssueLabelCreateInput", {})
export class IssueLabelCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => IssueCreateNestedOneWithoutLabelsInput, {
    nullable: false
  })
  issue!: IssueCreateNestedOneWithoutLabelsInput;

  @TypeGraphQL.Field(_type => LabelCreateNestedOneWithoutIssuesInput, {
    nullable: false
  })
  label!: LabelCreateNestedOneWithoutIssuesInput;
}
