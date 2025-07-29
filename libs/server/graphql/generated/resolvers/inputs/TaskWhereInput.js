"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const IssueListRelationFilter_1 = require("../inputs/IssueListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const SubtaskListRelationFilter_1 = require("../inputs/SubtaskListRelationFilter");
const TaskDependencyListRelationFilter_1 = require("../inputs/TaskDependencyListRelationFilter");
let TaskWhereInput = class TaskWhereInput {
};
exports.TaskWhereInput = TaskWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TaskWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TaskWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TaskWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TaskWhereInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TaskWhereInput.prototype, "testStrategy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TaskWhereInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TaskWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], TaskWhereInput.prototype, "complexity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TaskWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TaskWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskListRelationFilter_1.SubtaskListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskListRelationFilter_1.SubtaskListRelationFilter)
], TaskWhereInput.prototype, "subtasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyListRelationFilter_1.TaskDependencyListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyListRelationFilter_1.TaskDependencyListRelationFilter)
], TaskWhereInput.prototype, "dependencies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyListRelationFilter_1.TaskDependencyListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyListRelationFilter_1.TaskDependencyListRelationFilter)
], TaskWhereInput.prototype, "dependents", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueListRelationFilter_1.IssueListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueListRelationFilter_1.IssueListRelationFilter)
], TaskWhereInput.prototype, "issues", void 0);
exports.TaskWhereInput = TaskWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskWhereInput", {})
], TaskWhereInput);
