"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskCreateNestedManyWithoutParentTaskInput_1 = require("../inputs/SubtaskCreateNestedManyWithoutParentTaskInput");
const TaskDependencyCreateNestedManyWithoutDependsOnInput_1 = require("../inputs/TaskDependencyCreateNestedManyWithoutDependsOnInput");
const TaskDependencyCreateNestedManyWithoutTaskInput_1 = require("../inputs/TaskDependencyCreateNestedManyWithoutTaskInput");
let TaskCreateWithoutIssuesInput = class TaskCreateWithoutIssuesInput {
};
exports.TaskCreateWithoutIssuesInput = TaskCreateWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskCreateWithoutIssuesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutIssuesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutIssuesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutIssuesInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutIssuesInput.prototype, "testStrategy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutIssuesInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutIssuesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskCreateWithoutIssuesInput.prototype, "complexity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateWithoutIssuesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateWithoutIssuesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCreateNestedManyWithoutParentTaskInput_1.SubtaskCreateNestedManyWithoutParentTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskCreateNestedManyWithoutParentTaskInput_1.SubtaskCreateNestedManyWithoutParentTaskInput)
], TaskCreateWithoutIssuesInput.prototype, "subtasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyCreateNestedManyWithoutTaskInput_1.TaskDependencyCreateNestedManyWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyCreateNestedManyWithoutTaskInput_1.TaskDependencyCreateNestedManyWithoutTaskInput)
], TaskCreateWithoutIssuesInput.prototype, "dependencies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyCreateNestedManyWithoutDependsOnInput_1.TaskDependencyCreateNestedManyWithoutDependsOnInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyCreateNestedManyWithoutDependsOnInput_1.TaskDependencyCreateNestedManyWithoutDependsOnInput)
], TaskCreateWithoutIssuesInput.prototype, "dependents", void 0);
exports.TaskCreateWithoutIssuesInput = TaskCreateWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateWithoutIssuesInput", {})
], TaskCreateWithoutIssuesInput);
