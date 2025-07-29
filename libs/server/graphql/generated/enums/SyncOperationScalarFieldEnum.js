"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncOperationScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SyncOperationScalarFieldEnum;
(function (SyncOperationScalarFieldEnum) {
    SyncOperationScalarFieldEnum["id"] = "id";
    SyncOperationScalarFieldEnum["type"] = "type";
    SyncOperationScalarFieldEnum["status"] = "status";
    SyncOperationScalarFieldEnum["source"] = "source";
    SyncOperationScalarFieldEnum["timestamp"] = "timestamp";
    SyncOperationScalarFieldEnum["completedAt"] = "completedAt";
    SyncOperationScalarFieldEnum["data"] = "data";
    SyncOperationScalarFieldEnum["rollbackData"] = "rollbackData";
    SyncOperationScalarFieldEnum["metadata"] = "metadata";
    SyncOperationScalarFieldEnum["retryCount"] = "retryCount";
    SyncOperationScalarFieldEnum["maxRetries"] = "maxRetries";
    SyncOperationScalarFieldEnum["error"] = "error";
    SyncOperationScalarFieldEnum["taskIds"] = "taskIds";
})(SyncOperationScalarFieldEnum || (exports.SyncOperationScalarFieldEnum = SyncOperationScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SyncOperationScalarFieldEnum, {
    name: "SyncOperationScalarFieldEnum",
    description: undefined,
});
