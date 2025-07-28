"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyCreateOrConnectWithoutDependsOnInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyCreateWithoutDependsOnInput_1 = require("../inputs/TaskDependencyCreateWithoutDependsOnInput");
const TaskDependencyWhereUniqueInput_1 = require("../inputs/TaskDependencyWhereUniqueInput");
let TaskDependencyCreateOrConnectWithoutDependsOnInput = class TaskDependencyCreateOrConnectWithoutDependsOnInput {
};
exports.TaskDependencyCreateOrConnectWithoutDependsOnInput = TaskDependencyCreateOrConnectWithoutDependsOnInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput)
], TaskDependencyCreateOrConnectWithoutDependsOnInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyCreateWithoutDependsOnInput_1.TaskDependencyCreateWithoutDependsOnInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyCreateWithoutDependsOnInput_1.TaskDependencyCreateWithoutDependsOnInput)
], TaskDependencyCreateOrConnectWithoutDependsOnInput.prototype, "create", void 0);
exports.TaskDependencyCreateOrConnectWithoutDependsOnInput = TaskDependencyCreateOrConnectWithoutDependsOnInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyCreateOrConnectWithoutDependsOnInput", {})
], TaskDependencyCreateOrConnectWithoutDependsOnInput);
