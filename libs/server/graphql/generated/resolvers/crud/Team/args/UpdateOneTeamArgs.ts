import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamUpdateInput } from "../../../inputs/TeamUpdateInput";
import { TeamWhereUniqueInput } from "../../../inputs/TeamWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTeamArgs {
  @TypeGraphQL.Field(_type => TeamUpdateInput, {
    nullable: false
  })
  data!: TeamUpdateInput;

  @TypeGraphQL.Field(_type => TeamWhereUniqueInput, {
    nullable: false
  })
  where!: TeamWhereUniqueInput;
}
