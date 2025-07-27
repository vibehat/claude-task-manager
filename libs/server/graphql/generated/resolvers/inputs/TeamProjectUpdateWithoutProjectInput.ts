import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TeamUpdateOneRequiredWithoutProjectsNestedInput } from "../inputs/TeamUpdateOneRequiredWithoutProjectsNestedInput";

@TypeGraphQL.InputType("TeamProjectUpdateWithoutProjectInput", {})
export class TeamProjectUpdateWithoutProjectInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TeamUpdateOneRequiredWithoutProjectsNestedInput, {
    nullable: true
  })
  team?: TeamUpdateOneRequiredWithoutProjectsNestedInput | undefined;
}
