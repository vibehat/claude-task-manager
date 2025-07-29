"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateWithoutSubtasksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateNestedManyWithoutTaskInput_1 = require("../inputs/IssueCreateNestedManyWithoutTaskInput");
const TaskDependencyCreateNestedManyWithoutDependsOnInput_1 = require("../inputs/TaskDependencyCreateNestedManyWithoutDependsOnInput");
const TaskDependencyCreateNestedManyWithoutTaskInput_1 = require("../inputs/TaskDependencyCreateNestedManyWithoutTaskInput");
let TaskCreateWithoutSubtasksInput = class TaskCreateWithoutSubtasksInput {
};
exports.TaskCreateWithoutSubtasksInput = TaskCreateWithoutSubtasksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskCreateWithoutSubtasksInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutSubtasksInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutSubtasksInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutSubtasksInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutSubtasksInput.prototype, "testStrategy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutSubtasksInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutSubtasksInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskCreateWithoutSubtasksInput.prototype, "complexity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateWithoutSubtasksInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateWithoutSubtasksInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyCreateNestedManyWithoutTaskInput_1.TaskDependencyCreateNestedManyWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyCreateNestedManyWithoutTaskInput_1.TaskDependencyCreateNestedManyWithoutTaskInput)
], TaskCreateWithoutSubtasksInput.prototype, "dependencies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyCreateNestedManyWithoutDependsOnInput_1.TaskDependencyCreateNestedManyWithoutDependsOnInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyCreateNestedManyWithoutDependsOnInput_1.TaskDependencyCreateNestedManyWithoutDependsOnInput)
], TaskCreateWithoutSubtasksInput.prototype, "dependents", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutTaskInput_1.IssueCreateNestedManyWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedManyWithoutTaskInput_1.IssueCreateNestedManyWithoutTaskInput)
], TaskCreateWithoutSubtasksInput.prototype, "issues", void 0);
exports.TaskCreateWithoutSubtasksInput = TaskCreateWithoutSubtasksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateWithoutSubtasksInput", {})
], TaskCreateWithoutSubtasksInput);
