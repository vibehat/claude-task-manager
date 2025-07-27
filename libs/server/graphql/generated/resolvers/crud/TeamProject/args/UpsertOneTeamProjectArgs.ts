import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamProjectCreateInput } from "../../../inputs/TeamProjectCreateInput";
import { TeamProjectUpdateInput } from "../../../inputs/TeamProjectUpdateInput";
import { TeamProjectWhereUniqueInput } from "../../../inputs/TeamProjectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTeamProjectArgs {
  @TypeGraphQL.Field(_type => TeamProjectWhereUniqueInput, {
    nullable: false
  })
  where!: TeamProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeamProjectCreateInput, {
    nullable: false
  })
  create!: TeamProjectCreateInput;

  @TypeGraphQL.Field(_type => TeamProjectUpdateInput, {
    nullable: false
  })
  update!: TeamProjectUpdateInput;
}
