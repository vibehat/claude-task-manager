"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueWhereUniqueInput = void 0;
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
const IssueWhereInput_1 = require("../inputs/IssueWhereInput");
const ProjectNullableRelationFilter_1 = require("../inputs/ProjectNullableRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const SubtaskNullableRelationFilter_1 = require("../inputs/SubtaskNullableRelationFilter");
const TaskNullableRelationFilter_1 = require("../inputs/TaskNullableRelationFilter");
const UserNullableRelationFilter_1 = require("../inputs/UserNullableRelationFilter");
let IssueWhereUniqueInput = class IssueWhereUniqueInput {
};
exports.IssueWhereUniqueInput = IssueWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueWhereUniqueInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereInput_1.IssueWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereInput_1.IssueWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereInput_1.IssueWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssueWhereUniqueInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssueWhereUniqueInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IssueWhereUniqueInput.prototype, "statusId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IssueWhereUniqueInput.prototype, "priorityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IssueWhereUniqueInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IssueWhereUniqueInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssueWhereUniqueInput.prototype, "rank", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IssueWhereUniqueInput.prototype, "cycleId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], IssueWhereUniqueInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], IssueWhereUniqueInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IssueWhereUniqueInput.prototype, "subtaskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IssueWhereUniqueInput.prototype, "issueType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IssueWhereUniqueInput.prototype, "parentIssueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IssueWhereUniqueInput.prototype, "assigneeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IssueWhereUniqueInput.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], IssueWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], IssueWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserNullableRelationFilter_1.UserNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserNullableRelationFilter_1.UserNullableRelationFilter)
], IssueWhereUniqueInput.prototype, "assignee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectNullableRelationFilter_1.ProjectNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectNullableRelationFilter_1.ProjectNullableRelationFilter)
], IssueWhereUniqueInput.prototype, "project", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleNullableRelationFilter_1.CycleNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleNullableRelationFilter_1.CycleNullableRelationFilter)
], IssueWhereUniqueInput.prototype, "cycle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskNullableRelationFilter_1.TaskNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskNullableRelationFilter_1.TaskNullableRelationFilter)
], IssueWhereUniqueInput.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskNullableRelationFilter_1.SubtaskNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskNullableRelationFilter_1.SubtaskNullableRelationFilter)
], IssueWhereUniqueInput.prototype, "subtask", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusNullableRelationFilter_1.IssueStatusNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusNullableRelationFilter_1.IssueStatusNullableRelationFilter)
], IssueWhereUniqueInput.prototype, "issueStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityNullableRelationFilter_1.IssuePriorityNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityNullableRelationFilter_1.IssuePriorityNullableRelationFilter)
], IssueWhereUniqueInput.prototype, "issuePriority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelListRelationFilter_1.IssueLabelListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelListRelationFilter_1.IssueLabelListRelationFilter)
], IssueWhereUniqueInput.prototype, "labels", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueNullableRelationFilter_1.IssueNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueNullableRelationFilter_1.IssueNullableRelationFilter)
], IssueWhereUniqueInput.prototype, "parentIssue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueListRelationFilter_1.IssueListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueListRelationFilter_1.IssueListRelationFilter)
], IssueWhereUniqueInput.prototype, "subIssues", void 0);
exports.IssueWhereUniqueInput = IssueWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueWhereUniqueInput", {})
], IssueWhereUniqueInput);
