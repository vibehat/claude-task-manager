import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamMemberUpdateInput } from "../../../inputs/TeamMemberUpdateInput";
import { TeamMemberWhereUniqueInput } from "../../../inputs/TeamMemberWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTeamMemberArgs {
  @TypeGraphQL.Field(_type => TeamMemberUpdateInput, {
    nullable: false
  })
  data!: TeamMemberUpdateInput;

  @TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput, {
    nullable: false
  })
  where!: TeamMemberWhereUniqueInput;
}
