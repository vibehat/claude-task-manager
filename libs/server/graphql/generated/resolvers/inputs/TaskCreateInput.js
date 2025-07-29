"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateNestedManyWithoutTaskInput_1 = require("../inputs/IssueCreateNestedManyWithoutTaskInput");
const SubtaskCreateNestedManyWithoutParentTaskInput_1 = require("../inputs/SubtaskCreateNestedManyWithoutParentTaskInput");
const TaskDependencyCreateNestedManyWithoutDependsOnInput_1 = require("../inputs/TaskDependencyCreateNestedManyWithoutDependsOnInput");
const TaskDependencyCreateNestedManyWithoutTaskInput_1 = require("../inputs/TaskDependencyCreateNestedManyWithoutTaskInput");
let TaskCreateInput = class TaskCreateInput {
};
exports.TaskCreateInput = TaskCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateInput.prototype, "testStrategy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskCreateInput.prototype, "complexity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCreateNestedManyWithoutParentTaskInput_1.SubtaskCreateNestedManyWithoutParentTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskCreateNestedManyWithoutParentTaskInput_1.SubtaskCreateNestedManyWithoutParentTaskInput)
], TaskCreateInput.prototype, "subtasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyCreateNestedManyWithoutTaskInput_1.TaskDependencyCreateNestedManyWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyCreateNestedManyWithoutTaskInput_1.TaskDependencyCreateNestedManyWithoutTaskInput)
], TaskCreateInput.prototype, "dependencies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyCreateNestedManyWithoutDependsOnInput_1.TaskDependencyCreateNestedManyWithoutDependsOnInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyCreateNestedManyWithoutDependsOnInput_1.TaskDependencyCreateNestedManyWithoutDependsOnInput)
], TaskCreateInput.prototype, "dependents", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutTaskInput_1.IssueCreateNestedManyWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedManyWithoutTaskInput_1.IssueCreateNestedManyWithoutTaskInput)
], TaskCreateInput.prototype, "issues", void 0);
exports.TaskCreateInput = TaskCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateInput", {})
], TaskCreateInput);
