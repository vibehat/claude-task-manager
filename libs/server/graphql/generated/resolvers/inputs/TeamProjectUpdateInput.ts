import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectUpdateOneRequiredWithoutTeamsNestedInput } from "../inputs/ProjectUpdateOneRequiredWithoutTeamsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TeamUpdateOneRequiredWithoutProjectsNestedInput } from "../inputs/TeamUpdateOneRequiredWithoutProjectsNestedInput";

@TypeGraphQL.InputType("TeamProjectUpdateInput", {})
export class TeamProjectUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TeamUpdateOneRequiredWithoutProjectsNestedInput, {
    nullable: true
  })
  team?: TeamUpdateOneRequiredWithoutProjectsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateOneRequiredWithoutTeamsNestedInput, {
    nullable: true
  })
  project?: ProjectUpdateOneRequiredWithoutTeamsNestedInput | undefined;
}
