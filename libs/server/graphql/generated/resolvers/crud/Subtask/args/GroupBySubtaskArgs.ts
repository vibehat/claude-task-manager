import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubtaskOrderByWithAggregationInput } from "../../../inputs/SubtaskOrderByWithAggregationInput";
import { SubtaskScalarWhereWithAggregatesInput } from "../../../inputs/SubtaskScalarWhereWithAggregatesInput";
import { SubtaskWhereInput } from "../../../inputs/SubtaskWhereInput";
import { SubtaskScalarFieldEnum } from "../../../../enums/SubtaskScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySubtaskArgs {
  @TypeGraphQL.Field(_type => SubtaskWhereInput, {
    nullable: true
  })
  where?: SubtaskWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SubtaskOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SubtaskOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubtaskScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "description" | "details" | "testStrategy" | "status" | "parentId" | "dependencies" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => SubtaskScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SubtaskScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
