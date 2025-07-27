import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamMemberOrderByWithAggregationInput } from "../../../inputs/TeamMemberOrderByWithAggregationInput";
import { TeamMemberScalarWhereWithAggregatesInput } from "../../../inputs/TeamMemberScalarWhereWithAggregatesInput";
import { TeamMemberWhereInput } from "../../../inputs/TeamMemberWhereInput";
import { TeamMemberScalarFieldEnum } from "../../../../enums/TeamMemberScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTeamMemberArgs {
  @TypeGraphQL.Field(_type => TeamMemberWhereInput, {
    nullable: true
  })
  where?: TeamMemberWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TeamMemberOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "teamId" | "userId">;

  @TypeGraphQL.Field(_type => TeamMemberScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TeamMemberScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
