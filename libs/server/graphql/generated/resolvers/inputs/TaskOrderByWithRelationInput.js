"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueOrderByRelationAggregateInput_1 = require("../inputs/IssueOrderByRelationAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SubtaskOrderByRelationAggregateInput_1 = require("../inputs/SubtaskOrderByRelationAggregateInput");
const TaskDependencyOrderByRelationAggregateInput_1 = require("../inputs/TaskDependencyOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TaskOrderByWithRelationInput = class TaskOrderByWithRelationInput {
};
exports.TaskOrderByWithRelationInput = TaskOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithRelationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], TaskOrderByWithRelationInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], TaskOrderByWithRelationInput.prototype, "testStrategy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithRelationInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithRelationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], TaskOrderByWithRelationInput.prototype, "complexity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskOrderByRelationAggregateInput_1.SubtaskOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskOrderByRelationAggregateInput_1.SubtaskOrderByRelationAggregateInput)
], TaskOrderByWithRelationInput.prototype, "subtasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyOrderByRelationAggregateInput_1.TaskDependencyOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyOrderByRelationAggregateInput_1.TaskDependencyOrderByRelationAggregateInput)
], TaskOrderByWithRelationInput.prototype, "dependencies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyOrderByRelationAggregateInput_1.TaskDependencyOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyOrderByRelationAggregateInput_1.TaskDependencyOrderByRelationAggregateInput)
], TaskOrderByWithRelationInput.prototype, "dependents", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueOrderByRelationAggregateInput_1.IssueOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueOrderByRelationAggregateInput_1.IssueOrderByRelationAggregateInput)
], TaskOrderByWithRelationInput.prototype, "issues", void 0);
exports.TaskOrderByWithRelationInput = TaskOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskOrderByWithRelationInput", {})
], TaskOrderByWithRelationInput);
