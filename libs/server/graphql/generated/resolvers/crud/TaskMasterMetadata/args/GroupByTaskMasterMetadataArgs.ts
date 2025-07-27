import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskMasterMetadataOrderByWithAggregationInput } from "../../../inputs/TaskMasterMetadataOrderByWithAggregationInput";
import { TaskMasterMetadataScalarWhereWithAggregatesInput } from "../../../inputs/TaskMasterMetadataScalarWhereWithAggregatesInput";
import { TaskMasterMetadataWhereInput } from "../../../inputs/TaskMasterMetadataWhereInput";
import { TaskMasterMetadataScalarFieldEnum } from "../../../../enums/TaskMasterMetadataScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTaskMasterMetadataArgs {
  @TypeGraphQL.Field(_type => TaskMasterMetadataWhereInput, {
    nullable: true
  })
  where?: TaskMasterMetadataWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TaskMasterMetadataOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TaskMasterMetadataOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskMasterMetadataScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created" | "updated" | "description">;

  @TypeGraphQL.Field(_type => TaskMasterMetadataScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TaskMasterMetadataScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
