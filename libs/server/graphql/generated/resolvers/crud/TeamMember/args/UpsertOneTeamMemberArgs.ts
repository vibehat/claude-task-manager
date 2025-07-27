import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamMemberCreateInput } from "../../../inputs/TeamMemberCreateInput";
import { TeamMemberUpdateInput } from "../../../inputs/TeamMemberUpdateInput";
import { TeamMemberWhereUniqueInput } from "../../../inputs/TeamMemberWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTeamMemberArgs {
  @TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput, {
    nullable: false
  })
  where!: TeamMemberWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeamMemberCreateInput, {
    nullable: false
  })
  create!: TeamMemberCreateInput;

  @TypeGraphQL.Field(_type => TeamMemberUpdateInput, {
    nullable: false
  })
  update!: TeamMemberUpdateInput;
}
