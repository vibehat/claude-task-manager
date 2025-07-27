import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueStatusOrderByWithAggregationInput } from "../../../inputs/IssueStatusOrderByWithAggregationInput";
import { IssueStatusScalarWhereWithAggregatesInput } from "../../../inputs/IssueStatusScalarWhereWithAggregatesInput";
import { IssueStatusWhereInput } from "../../../inputs/IssueStatusWhereInput";
import { IssueStatusScalarFieldEnum } from "../../../../enums/IssueStatusScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByIssueStatusArgs {
  @TypeGraphQL.Field(_type => IssueStatusWhereInput, {
    nullable: true
  })
  where?: IssueStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IssueStatusOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: IssueStatusOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueStatusScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "color" | "iconName" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => IssueStatusScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: IssueStatusScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
