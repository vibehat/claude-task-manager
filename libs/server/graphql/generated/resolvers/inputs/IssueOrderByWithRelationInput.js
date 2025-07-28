"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleOrderByWithRelationInput_1 = require("../inputs/CycleOrderByWithRelationInput");
const IssueLabelOrderByRelationAggregateInput_1 = require("../inputs/IssueLabelOrderByRelationAggregateInput");
const IssueOrderByRelationAggregateInput_1 = require("../inputs/IssueOrderByRelationAggregateInput");
const IssuePriorityOrderByWithRelationInput_1 = require("../inputs/IssuePriorityOrderByWithRelationInput");
const IssueStatusOrderByWithRelationInput_1 = require("../inputs/IssueStatusOrderByWithRelationInput");
const ProjectOrderByWithRelationInput_1 = require("../inputs/ProjectOrderByWithRelationInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SubtaskOrderByWithRelationInput_1 = require("../inputs/SubtaskOrderByWithRelationInput");
const TaskOrderByWithRelationInput_1 = require("../inputs/TaskOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let IssueOrderByWithRelationInput = class IssueOrderByWithRelationInput {
};
exports.IssueOrderByWithRelationInput = IssueOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueOrderByWithRelationInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueOrderByWithRelationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithRelationInput.prototype, "statusId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithRelationInput.prototype, "priorityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithRelationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithRelationInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueOrderByWithRelationInput.prototype, "rank", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithRelationInput.prototype, "cycleId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithRelationInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithRelationInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithRelationInput.prototype, "subtaskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueOrderByWithRelationInput.prototype, "issueType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithRelationInput.prototype, "parentIssueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithRelationInput.prototype, "assigneeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithRelationInput.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], IssueOrderByWithRelationInput.prototype, "assignee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectOrderByWithRelationInput_1.ProjectOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectOrderByWithRelationInput_1.ProjectOrderByWithRelationInput)
], IssueOrderByWithRelationInput.prototype, "project", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleOrderByWithRelationInput_1.CycleOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleOrderByWithRelationInput_1.CycleOrderByWithRelationInput)
], IssueOrderByWithRelationInput.prototype, "cycle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskOrderByWithRelationInput_1.TaskOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskOrderByWithRelationInput_1.TaskOrderByWithRelationInput)
], IssueOrderByWithRelationInput.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskOrderByWithRelationInput_1.SubtaskOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskOrderByWithRelationInput_1.SubtaskOrderByWithRelationInput)
], IssueOrderByWithRelationInput.prototype, "subtask", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusOrderByWithRelationInput_1.IssueStatusOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusOrderByWithRelationInput_1.IssueStatusOrderByWithRelationInput)
], IssueOrderByWithRelationInput.prototype, "issueStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityOrderByWithRelationInput_1.IssuePriorityOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityOrderByWithRelationInput_1.IssuePriorityOrderByWithRelationInput)
], IssueOrderByWithRelationInput.prototype, "issuePriority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelOrderByRelationAggregateInput_1.IssueLabelOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelOrderByRelationAggregateInput_1.IssueLabelOrderByRelationAggregateInput)
], IssueOrderByWithRelationInput.prototype, "labels", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueOrderByWithRelationInput)
], IssueOrderByWithRelationInput.prototype, "parentIssue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueOrderByRelationAggregateInput_1.IssueOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueOrderByRelationAggregateInput_1.IssueOrderByRelationAggregateInput)
], IssueOrderByWithRelationInput.prototype, "subIssues", void 0);
exports.IssueOrderByWithRelationInput = IssueOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueOrderByWithRelationInput", {})
], IssueOrderByWithRelationInput);
