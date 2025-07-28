"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateNestedOneWithoutDependenciesInput_1 = require("../inputs/TaskCreateNestedOneWithoutDependenciesInput");
const TaskCreateNestedOneWithoutDependentsInput_1 = require("../inputs/TaskCreateNestedOneWithoutDependentsInput");
let TaskDependencyCreateInput = class TaskDependencyCreateInput {
};
exports.TaskDependencyCreateInput = TaskDependencyCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskDependencyCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutDependenciesInput_1.TaskCreateNestedOneWithoutDependenciesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedOneWithoutDependenciesInput_1.TaskCreateNestedOneWithoutDependenciesInput)
], TaskDependencyCreateInput.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutDependentsInput_1.TaskCreateNestedOneWithoutDependentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedOneWithoutDependentsInput_1.TaskCreateNestedOneWithoutDependentsInput)
], TaskDependencyCreateInput.prototype, "dependsOn", void 0);
exports.TaskDependencyCreateInput = TaskDependencyCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyCreateInput", {})
], TaskDependencyCreateInput);
