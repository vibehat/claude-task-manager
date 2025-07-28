"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateWithoutDependenciesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateNestedManyWithoutTaskInput_1 = require("../inputs/IssueCreateNestedManyWithoutTaskInput");
const SubtaskCreateNestedManyWithoutParentTaskInput_1 = require("../inputs/SubtaskCreateNestedManyWithoutParentTaskInput");
const TaskDependencyCreateNestedManyWithoutDependsOnInput_1 = require("../inputs/TaskDependencyCreateNestedManyWithoutDependsOnInput");
let TaskCreateWithoutDependenciesInput = class TaskCreateWithoutDependenciesInput {
};
exports.TaskCreateWithoutDependenciesInput = TaskCreateWithoutDependenciesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskCreateWithoutDependenciesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutDependenciesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutDependenciesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutDependenciesInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutDependenciesInput.prototype, "testStrategy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutDependenciesInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutDependenciesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskCreateWithoutDependenciesInput.prototype, "complexity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateWithoutDependenciesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateWithoutDependenciesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCreateNestedManyWithoutParentTaskInput_1.SubtaskCreateNestedManyWithoutParentTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskCreateNestedManyWithoutParentTaskInput_1.SubtaskCreateNestedManyWithoutParentTaskInput)
], TaskCreateWithoutDependenciesInput.prototype, "subtasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyCreateNestedManyWithoutDependsOnInput_1.TaskDependencyCreateNestedManyWithoutDependsOnInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyCreateNestedManyWithoutDependsOnInput_1.TaskDependencyCreateNestedManyWithoutDependsOnInput)
], TaskCreateWithoutDependenciesInput.prototype, "dependents", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutTaskInput_1.IssueCreateNestedManyWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedManyWithoutTaskInput_1.IssueCreateNestedManyWithoutTaskInput)
], TaskCreateWithoutDependenciesInput.prototype, "issues", void 0);
exports.TaskCreateWithoutDependenciesInput = TaskCreateWithoutDependenciesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateWithoutDependenciesInput", {})
], TaskCreateWithoutDependenciesInput);
