import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateNestedOneWithoutLabelsInput } from "../inputs/IssueCreateNestedOneWithoutLabelsInput";

@TypeGraphQL.InputType("IssueLabelCreateWithoutLabelInput", {})
export class IssueLabelCreateWithoutLabelInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => IssueCreateNestedOneWithoutLabelsInput, {
    nullable: false
  })
  issue!: IssueCreateNestedOneWithoutLabelsInput;
}
