import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamMemberCreateInput } from "../../../inputs/TeamMemberCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTeamMemberArgs {
  @TypeGraphQL.Field(_type => TeamMemberCreateInput, {
    nullable: false
  })
  data!: TeamMemberCreateInput;
}
