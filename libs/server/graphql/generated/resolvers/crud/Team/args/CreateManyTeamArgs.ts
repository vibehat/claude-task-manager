import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamCreateManyInput } from "../../../inputs/TeamCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTeamArgs {
  @TypeGraphQL.Field(_type => [TeamCreateManyInput], {
    nullable: false
  })
  data!: TeamCreateManyInput[];
}
