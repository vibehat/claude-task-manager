"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TaskDependencyScalarFieldEnum;
(function (TaskDependencyScalarFieldEnum) {
    TaskDependencyScalarFieldEnum["id"] = "id";
    TaskDependencyScalarFieldEnum["taskId"] = "taskId";
    TaskDependencyScalarFieldEnum["dependsOnId"] = "dependsOnId";
    TaskDependencyScalarFieldEnum["createdAt"] = "createdAt";
})(TaskDependencyScalarFieldEnum || (exports.TaskDependencyScalarFieldEnum = TaskDependencyScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TaskDependencyScalarFieldEnum, {
    name: "TaskDependencyScalarFieldEnum",
    description: undefined,
});
