import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SyncConflictOrderByWithAggregationInput } from "../../../inputs/SyncConflictOrderByWithAggregationInput";
import { SyncConflictScalarWhereWithAggregatesInput } from "../../../inputs/SyncConflictScalarWhereWithAggregatesInput";
import { SyncConflictWhereInput } from "../../../inputs/SyncConflictWhereInput";
import { SyncConflictScalarFieldEnum } from "../../../../enums/SyncConflictScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySyncConflictArgs {
  @TypeGraphQL.Field(_type => SyncConflictWhereInput, {
    nullable: true
  })
  where?: SyncConflictWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SyncConflictOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SyncConflictOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SyncConflictScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "operationType" | "taskId" | "uiVersion" | "cliVersion" | "resolved" | "resolution" | "resolvedAt" | "resolvedBy" | "timestamp">;

  @TypeGraphQL.Field(_type => SyncConflictScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SyncConflictScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
