import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamProjectCreateInput } from "../../../inputs/TeamProjectCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTeamProjectArgs {
  @TypeGraphQL.Field(_type => TeamProjectCreateInput, {
    nullable: false
  })
  data!: TeamProjectCreateInput;
}
