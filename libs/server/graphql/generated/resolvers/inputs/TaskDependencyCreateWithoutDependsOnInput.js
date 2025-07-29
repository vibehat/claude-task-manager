"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyCreateWithoutDependsOnInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateNestedOneWithoutDependenciesInput_1 = require("../inputs/TaskCreateNestedOneWithoutDependenciesInput");
let TaskDependencyCreateWithoutDependsOnInput = class TaskDependencyCreateWithoutDependsOnInput {
};
exports.TaskDependencyCreateWithoutDependsOnInput = TaskDependencyCreateWithoutDependsOnInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskDependencyCreateWithoutDependsOnInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutDependenciesInput_1.TaskCreateNestedOneWithoutDependenciesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedOneWithoutDependenciesInput_1.TaskCreateNestedOneWithoutDependenciesInput)
], TaskDependencyCreateWithoutDependsOnInput.prototype, "task", void 0);
exports.TaskDependencyCreateWithoutDependsOnInput = TaskDependencyCreateWithoutDependsOnInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyCreateWithoutDependsOnInput", {})
], TaskDependencyCreateWithoutDependsOnInput);
