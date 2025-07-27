import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelUpdateOneRequiredWithoutIssuesNestedInput } from "../inputs/LabelUpdateOneRequiredWithoutIssuesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("IssueLabelUpdateWithoutIssueInput", {})
export class IssueLabelUpdateWithoutIssueInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => LabelUpdateOneRequiredWithoutIssuesNestedInput, {
    nullable: true
  })
  label?: LabelUpdateOneRequiredWithoutIssuesNestedInput | undefined;
}
