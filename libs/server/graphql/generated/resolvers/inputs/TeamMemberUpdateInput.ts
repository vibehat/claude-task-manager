import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TeamUpdateOneRequiredWithoutMembersNestedInput } from "../inputs/TeamUpdateOneRequiredWithoutMembersNestedInput";
import { UserUpdateOneRequiredWithoutTeamsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutTeamsNestedInput";

@TypeGraphQL.InputType("TeamMemberUpdateInput", {})
export class TeamMemberUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TeamUpdateOneRequiredWithoutMembersNestedInput, {
    nullable: true
  })
  team?: TeamUpdateOneRequiredWithoutMembersNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTeamsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutTeamsNestedInput | undefined;
}
