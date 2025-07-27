import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamProjectCreateManyInput } from "../../../inputs/TeamProjectCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTeamProjectArgs {
  @TypeGraphQL.Field(_type => [TeamProjectCreateManyInput], {
    nullable: false
  })
  data!: TeamProjectCreateManyInput[];
}
