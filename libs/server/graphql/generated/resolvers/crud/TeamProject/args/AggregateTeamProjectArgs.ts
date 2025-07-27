import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamProjectOrderByWithRelationInput } from "../../../inputs/TeamProjectOrderByWithRelationInput";
import { TeamProjectWhereInput } from "../../../inputs/TeamProjectWhereInput";
import { TeamProjectWhereUniqueInput } from "../../../inputs/TeamProjectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTeamProjectArgs {
  @TypeGraphQL.Field(_type => TeamProjectWhereInput, {
    nullable: true
  })
  where?: TeamProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TeamProjectOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TeamProjectWhereUniqueInput, {
    nullable: true
  })
  cursor?: TeamProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
