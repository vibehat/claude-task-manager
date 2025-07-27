import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamProjectOrderByWithAggregationInput } from "../../../inputs/TeamProjectOrderByWithAggregationInput";
import { TeamProjectScalarWhereWithAggregatesInput } from "../../../inputs/TeamProjectScalarWhereWithAggregatesInput";
import { TeamProjectWhereInput } from "../../../inputs/TeamProjectWhereInput";
import { TeamProjectScalarFieldEnum } from "../../../../enums/TeamProjectScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTeamProjectArgs {
  @TypeGraphQL.Field(_type => TeamProjectWhereInput, {
    nullable: true
  })
  where?: TeamProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TeamProjectOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "teamId" | "projectId">;

  @TypeGraphQL.Field(_type => TeamProjectScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TeamProjectScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
