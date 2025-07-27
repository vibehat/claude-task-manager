import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamProjectUpdateInput } from "../../../inputs/TeamProjectUpdateInput";
import { TeamProjectWhereUniqueInput } from "../../../inputs/TeamProjectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTeamProjectArgs {
  @TypeGraphQL.Field(_type => TeamProjectUpdateInput, {
    nullable: false
  })
  data!: TeamProjectUpdateInput;

  @TypeGraphQL.Field(_type => TeamProjectWhereUniqueInput, {
    nullable: false
  })
  where!: TeamProjectWhereUniqueInput;
}
