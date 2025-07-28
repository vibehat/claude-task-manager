"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncConflictScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SyncConflictScalarFieldEnum;
(function (SyncConflictScalarFieldEnum) {
    SyncConflictScalarFieldEnum["id"] = "id";
    SyncConflictScalarFieldEnum["operationType"] = "operationType";
    SyncConflictScalarFieldEnum["taskId"] = "taskId";
    SyncConflictScalarFieldEnum["uiVersion"] = "uiVersion";
    SyncConflictScalarFieldEnum["cliVersion"] = "cliVersion";
    SyncConflictScalarFieldEnum["resolved"] = "resolved";
    SyncConflictScalarFieldEnum["resolution"] = "resolution";
    SyncConflictScalarFieldEnum["resolvedAt"] = "resolvedAt";
    SyncConflictScalarFieldEnum["resolvedBy"] = "resolvedBy";
    SyncConflictScalarFieldEnum["timestamp"] = "timestamp";
})(SyncConflictScalarFieldEnum || (exports.SyncConflictScalarFieldEnum = SyncConflictScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SyncConflictScalarFieldEnum, {
    name: "SyncConflictScalarFieldEnum",
    description: undefined,
});
