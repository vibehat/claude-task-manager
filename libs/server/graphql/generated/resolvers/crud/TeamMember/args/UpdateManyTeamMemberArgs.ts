import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamMemberUpdateManyMutationInput } from "../../../inputs/TeamMemberUpdateManyMutationInput";
import { TeamMemberWhereInput } from "../../../inputs/TeamMemberWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTeamMemberArgs {
  @TypeGraphQL.Field(_type => TeamMemberUpdateManyMutationInput, {
    nullable: false
  })
  data!: TeamMemberUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TeamMemberWhereInput, {
    nullable: true
  })
  where?: TeamMemberWhereInput | undefined;
}
