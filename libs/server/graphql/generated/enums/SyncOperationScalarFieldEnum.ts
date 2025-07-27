import * as TypeGraphQL from "type-graphql";

export enum SyncOperationScalarFieldEnum {
  id = "id",
  type = "type",
  status = "status",
  source = "source",
  timestamp = "timestamp",
  completedAt = "completedAt",
  data = "data",
  rollbackData = "rollbackData",
  metadata = "metadata",
  retryCount = "retryCount",
  maxRetries = "maxRetries",
  error = "error",
  taskIds = "taskIds"
}
TypeGraphQL.registerEnumType(SyncOperationScalarFieldEnum, {
  name: "SyncOperationScalarFieldEnum",
  description: undefined,
});
