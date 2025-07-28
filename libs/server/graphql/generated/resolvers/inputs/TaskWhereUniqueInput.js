"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const IssueListRelationFilter_1 = require("../inputs/IssueListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const SubtaskListRelationFilter_1 = require("../inputs/SubtaskListRelationFilter");
const TaskDependencyListRelationFilter_1 = require("../inputs/TaskDependencyListRelationFilter");
const TaskWhereInput_1 = require("../inputs/TaskWhereInput");
let TaskWhereUniqueInput = class TaskWhereUniqueInput {
};
exports.TaskWhereUniqueInput = TaskWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereInput_1.TaskWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereInput_1.TaskWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereInput_1.TaskWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TaskWhereUniqueInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TaskWhereUniqueInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TaskWhereUniqueInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TaskWhereUniqueInput.prototype, "testStrategy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TaskWhereUniqueInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TaskWhereUniqueInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], TaskWhereUniqueInput.prototype, "complexity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TaskWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TaskWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskListRelationFilter_1.SubtaskListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskListRelationFilter_1.SubtaskListRelationFilter)
], TaskWhereUniqueInput.prototype, "subtasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyListRelationFilter_1.TaskDependencyListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyListRelationFilter_1.TaskDependencyListRelationFilter)
], TaskWhereUniqueInput.prototype, "dependencies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyListRelationFilter_1.TaskDependencyListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyListRelationFilter_1.TaskDependencyListRelationFilter)
], TaskWhereUniqueInput.prototype, "dependents", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueListRelationFilter_1.IssueListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueListRelationFilter_1.IssueListRelationFilter)
], TaskWhereUniqueInput.prototype, "issues", void 0);
exports.TaskWhereUniqueInput = TaskWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskWhereUniqueInput", {})
], TaskWhereUniqueInput);
