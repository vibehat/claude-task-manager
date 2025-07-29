"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyCreateWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateNestedOneWithoutDependentsInput_1 = require("../inputs/TaskCreateNestedOneWithoutDependentsInput");
let TaskDependencyCreateWithoutTaskInput = class TaskDependencyCreateWithoutTaskInput {
};
exports.TaskDependencyCreateWithoutTaskInput = TaskDependencyCreateWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskDependencyCreateWithoutTaskInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutDependentsInput_1.TaskCreateNestedOneWithoutDependentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedOneWithoutDependentsInput_1.TaskCreateNestedOneWithoutDependentsInput)
], TaskDependencyCreateWithoutTaskInput.prototype, "dependsOn", void 0);
exports.TaskDependencyCreateWithoutTaskInput = TaskDependencyCreateWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyCreateWithoutTaskInput", {})
], TaskDependencyCreateWithoutTaskInput);
