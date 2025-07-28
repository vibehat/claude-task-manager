"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleNullableRelationFilter_1 = require("../inputs/CycleNullableRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const IssueLabelListRelationFilter_1 = require("../inputs/IssueLabelListRelationFilter");
const IssueListRelationFilter_1 = require("../inputs/IssueListRelationFilter");
const IssueNullableRelationFilter_1 = require("../inputs/IssueNullableRelationFilter");
const IssuePriorityNullableRelationFilter_1 = require("../inputs/IssuePriorityNullableRelationFilter");
const IssueStatusNullableRelationFilter_1 = require("../inputs/IssueStatusNullableRelationFilter");
const ProjectNullableRelationFilter_1 = require("../inputs/ProjectNullableRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const SubtaskNullableRelationFilter_1 = require("../inputs/SubtaskNullableRelationFilter");
const TaskNullableRelationFilter_1 = require("../inputs/TaskNullableRelationFilter");
const UserNullableRelationFilter_1 = require("../inputs/UserNullableRelationFilter");
let IssueWhereInput = class IssueWhereInput {
};
exports.IssueWhereInput = IssueWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssueWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssueWhereInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssueWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssueWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IssueWhereInput.prototype, "statusId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IssueWhereInput.prototype, "priorityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IssueWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IssueWhereInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssueWhereInput.prototype, "rank", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IssueWhereInput.prototype, "cycleId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], IssueWhereInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], IssueWhereInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IssueWhereInput.prototype, "subtaskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssueWhereInput.prototype, "issueType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IssueWhereInput.prototype, "parentIssueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IssueWhereInput.prototype, "assigneeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IssueWhereInput.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], IssueWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], IssueWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserNullableRelationFilter_1.UserNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserNullableRelationFilter_1.UserNullableRelationFilter)
], IssueWhereInput.prototype, "assignee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectNullableRelationFilter_1.ProjectNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectNullableRelationFilter_1.ProjectNullableRelationFilter)
], IssueWhereInput.prototype, "project", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleNullableRelationFilter_1.CycleNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleNullableRelationFilter_1.CycleNullableRelationFilter)
], IssueWhereInput.prototype, "cycle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskNullableRelationFilter_1.TaskNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskNullableRelationFilter_1.TaskNullableRelationFilter)
], IssueWhereInput.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskNullableRelationFilter_1.SubtaskNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskNullableRelationFilter_1.SubtaskNullableRelationFilter)
], IssueWhereInput.prototype, "subtask", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusNullableRelationFilter_1.IssueStatusNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusNullableRelationFilter_1.IssueStatusNullableRelationFilter)
], IssueWhereInput.prototype, "issueStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityNullableRelationFilter_1.IssuePriorityNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityNullableRelationFilter_1.IssuePriorityNullableRelationFilter)
], IssueWhereInput.prototype, "issuePriority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelListRelationFilter_1.IssueLabelListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelListRelationFilter_1.IssueLabelListRelationFilter)
], IssueWhereInput.prototype, "labels", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueNullableRelationFilter_1.IssueNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueNullableRelationFilter_1.IssueNullableRelationFilter)
], IssueWhereInput.prototype, "parentIssue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueListRelationFilter_1.IssueListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueListRelationFilter_1.IssueListRelationFilter)
], IssueWhereInput.prototype, "subIssues", void 0);
exports.IssueWhereInput = IssueWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueWhereInput", {})
], IssueWhereInput);
