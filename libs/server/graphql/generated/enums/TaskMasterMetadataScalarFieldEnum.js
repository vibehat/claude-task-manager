"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMasterMetadataScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TaskMasterMetadataScalarFieldEnum;
(function (TaskMasterMetadataScalarFieldEnum) {
    TaskMasterMetadataScalarFieldEnum["id"] = "id";
    TaskMasterMetadataScalarFieldEnum["created"] = "created";
    TaskMasterMetadataScalarFieldEnum["updated"] = "updated";
    TaskMasterMetadataScalarFieldEnum["description"] = "description";
})(TaskMasterMetadataScalarFieldEnum || (exports.TaskMasterMetadataScalarFieldEnum = TaskMasterMetadataScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TaskMasterMetadataScalarFieldEnum, {
    name: "TaskMasterMetadataScalarFieldEnum",
    description: undefined,
});
