import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueLabelOrderByWithAggregationInput } from "../../../inputs/IssueLabelOrderByWithAggregationInput";
import { IssueLabelScalarWhereWithAggregatesInput } from "../../../inputs/IssueLabelScalarWhereWithAggregatesInput";
import { IssueLabelWhereInput } from "../../../inputs/IssueLabelWhereInput";
import { IssueLabelScalarFieldEnum } from "../../../../enums/IssueLabelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByIssueLabelArgs {
  @TypeGraphQL.Field(_type => IssueLabelWhereInput, {
    nullable: true
  })
  where?: IssueLabelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: IssueLabelOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "issueId" | "labelId">;

  @TypeGraphQL.Field(_type => IssueLabelScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: IssueLabelScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
