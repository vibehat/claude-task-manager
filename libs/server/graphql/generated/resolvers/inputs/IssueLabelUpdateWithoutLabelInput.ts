import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueUpdateOneRequiredWithoutLabelsNestedInput } from "../inputs/IssueUpdateOneRequiredWithoutLabelsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("IssueLabelUpdateWithoutLabelInput", {})
export class IssueLabelUpdateWithoutLabelInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IssueUpdateOneRequiredWithoutLabelsNestedInput, {
    nullable: true
  })
  issue?: IssueUpdateOneRequiredWithoutLabelsNestedInput | undefined;
}
