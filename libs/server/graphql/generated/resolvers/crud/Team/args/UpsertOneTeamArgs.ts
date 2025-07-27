import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamCreateInput } from "../../../inputs/TeamCreateInput";
import { TeamUpdateInput } from "../../../inputs/TeamUpdateInput";
import { TeamWhereUniqueInput } from "../../../inputs/TeamWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTeamArgs {
  @TypeGraphQL.Field(_type => TeamWhereUniqueInput, {
    nullable: false
  })
  where!: TeamWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeamCreateInput, {
    nullable: false
  })
  create!: TeamCreateInput;

  @TypeGraphQL.Field(_type => TeamUpdateInput, {
    nullable: false
  })
  update!: TeamUpdateInput;
}
