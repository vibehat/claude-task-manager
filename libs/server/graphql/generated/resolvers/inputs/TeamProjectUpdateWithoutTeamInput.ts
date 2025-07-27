import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectUpdateOneRequiredWithoutTeamsNestedInput } from "../inputs/ProjectUpdateOneRequiredWithoutTeamsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TeamProjectUpdateWithoutTeamInput", {})
export class TeamProjectUpdateWithoutTeamInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateOneRequiredWithoutTeamsNestedInput, {
    nullable: true
  })
  project?: ProjectUpdateOneRequiredWithoutTeamsNestedInput | undefined;
}
