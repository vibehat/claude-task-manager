import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamCreateInput } from "../../../inputs/TeamCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTeamArgs {
  @TypeGraphQL.Field(_type => TeamCreateInput, {
    nullable: false
  })
  data!: TeamCreateInput;
}
