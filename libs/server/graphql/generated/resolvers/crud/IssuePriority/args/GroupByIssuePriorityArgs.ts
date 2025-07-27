import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssuePriorityOrderByWithAggregationInput } from "../../../inputs/IssuePriorityOrderByWithAggregationInput";
import { IssuePriorityScalarWhereWithAggregatesInput } from "../../../inputs/IssuePriorityScalarWhereWithAggregatesInput";
import { IssuePriorityWhereInput } from "../../../inputs/IssuePriorityWhereInput";
import { IssuePriorityScalarFieldEnum } from "../../../../enums/IssuePriorityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByIssuePriorityArgs {
  @TypeGraphQL.Field(_type => IssuePriorityWhereInput, {
    nullable: true
  })
  where?: IssuePriorityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IssuePriorityOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: IssuePriorityOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssuePriorityScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "iconName" | "order" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => IssuePriorityScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: IssuePriorityScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
