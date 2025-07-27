import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SyncOperationOrderByWithAggregationInput } from "../../../inputs/SyncOperationOrderByWithAggregationInput";
import { SyncOperationScalarWhereWithAggregatesInput } from "../../../inputs/SyncOperationScalarWhereWithAggregatesInput";
import { SyncOperationWhereInput } from "../../../inputs/SyncOperationWhereInput";
import { SyncOperationScalarFieldEnum } from "../../../../enums/SyncOperationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySyncOperationArgs {
  @TypeGraphQL.Field(_type => SyncOperationWhereInput, {
    nullable: true
  })
  where?: SyncOperationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SyncOperationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SyncOperationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SyncOperationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "type" | "status" | "source" | "timestamp" | "completedAt" | "data" | "rollbackData" | "metadata" | "retryCount" | "maxRetries" | "error" | "taskIds">;

  @TypeGraphQL.Field(_type => SyncOperationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SyncOperationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
