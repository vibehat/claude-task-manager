import * as TypeGraphQL from "type-graphql";

export enum SyncConflictScalarFieldEnum {
  id = "id",
  operationType = "operationType",
  taskId = "taskId",
  uiVersion = "uiVersion",
  cliVersion = "cliVersion",
  resolved = "resolved",
  resolution = "resolution",
  resolvedAt = "resolvedAt",
  resolvedBy = "resolvedBy",
  timestamp = "timestamp"
}
TypeGraphQL.registerEnumType(SyncConflictScalarFieldEnum, {
  name: "SyncConflictScalarFieldEnum",
  description: undefined,
});
