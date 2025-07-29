"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TaskScalarFieldEnum;
(function (TaskScalarFieldEnum) {
    TaskScalarFieldEnum["id"] = "id";
    TaskScalarFieldEnum["title"] = "title";
    TaskScalarFieldEnum["description"] = "description";
    TaskScalarFieldEnum["details"] = "details";
    TaskScalarFieldEnum["testStrategy"] = "testStrategy";
    TaskScalarFieldEnum["priority"] = "priority";
    TaskScalarFieldEnum["status"] = "status";
    TaskScalarFieldEnum["complexity"] = "complexity";
    TaskScalarFieldEnum["createdAt"] = "createdAt";
    TaskScalarFieldEnum["updatedAt"] = "updatedAt";
})(TaskScalarFieldEnum || (exports.TaskScalarFieldEnum = TaskScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TaskScalarFieldEnum, {
    name: "TaskScalarFieldEnum",
    description: undefined,
});
