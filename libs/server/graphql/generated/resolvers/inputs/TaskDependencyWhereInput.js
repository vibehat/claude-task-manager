"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const TaskRelationFilter_1 = require("../inputs/TaskRelationFilter");
let TaskDependencyWhereInput = class TaskDependencyWhereInput {
};
exports.TaskDependencyWhereInput = TaskDependencyWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TaskDependencyWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TaskDependencyWhereInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TaskDependencyWhereInput.prototype, "dependsOnId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TaskDependencyWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskRelationFilter_1.TaskRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskRelationFilter_1.TaskRelationFilter)
], TaskDependencyWhereInput.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskRelationFilter_1.TaskRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskRelationFilter_1.TaskRelationFilter)
], TaskDependencyWhereInput.prototype, "dependsOn", void 0);
exports.TaskDependencyWhereInput = TaskDependencyWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyWhereInput", {})
], TaskDependencyWhereInput);
