import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamMemberCreateManyInput } from "../../../inputs/TeamMemberCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnTeamMemberArgs {
  @TypeGraphQL.Field(_type => [TeamMemberCreateManyInput], {
    nullable: false
  })
  data!: TeamMemberCreateManyInput[];
}
