import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamMemberWhereInput } from "../../../inputs/TeamMemberWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTeamMemberArgs {
  @TypeGraphQL.Field(_type => TeamMemberWhereInput, {
    nullable: true
  })
  where?: TeamMemberWhereInput | undefined;
}
