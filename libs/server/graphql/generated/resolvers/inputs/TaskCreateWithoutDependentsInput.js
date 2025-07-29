"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateWithoutDependentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateNestedManyWithoutTaskInput_1 = require("../inputs/IssueCreateNestedManyWithoutTaskInput");
const SubtaskCreateNestedManyWithoutParentTaskInput_1 = require("../inputs/SubtaskCreateNestedManyWithoutParentTaskInput");
const TaskDependencyCreateNestedManyWithoutTaskInput_1 = require("../inputs/TaskDependencyCreateNestedManyWithoutTaskInput");
let TaskCreateWithoutDependentsInput = class TaskCreateWithoutDependentsInput {
};
exports.TaskCreateWithoutDependentsInput = TaskCreateWithoutDependentsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskCreateWithoutDependentsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutDependentsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutDependentsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutDependentsInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutDependentsInput.prototype, "testStrategy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutDependentsInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutDependentsInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskCreateWithoutDependentsInput.prototype, "complexity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateWithoutDependentsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateWithoutDependentsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCreateNestedManyWithoutParentTaskInput_1.SubtaskCreateNestedManyWithoutParentTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskCreateNestedManyWithoutParentTaskInput_1.SubtaskCreateNestedManyWithoutParentTaskInput)
], TaskCreateWithoutDependentsInput.prototype, "subtasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyCreateNestedManyWithoutTaskInput_1.TaskDependencyCreateNestedManyWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyCreateNestedManyWithoutTaskInput_1.TaskDependencyCreateNestedManyWithoutTaskInput)
], TaskCreateWithoutDependentsInput.prototype, "dependencies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutTaskInput_1.IssueCreateNestedManyWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedManyWithoutTaskInput_1.IssueCreateNestedManyWithoutTaskInput)
], TaskCreateWithoutDependentsInput.prototype, "issues", void 0);
exports.TaskCreateWithoutDependentsInput = TaskCreateWithoutDependentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateWithoutDependentsInput", {})
], TaskCreateWithoutDependentsInput);
