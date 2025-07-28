"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const TaskDependencyTaskIdDependsOnIdCompoundUniqueInput_1 = require("../inputs/TaskDependencyTaskIdDependsOnIdCompoundUniqueInput");
const TaskDependencyWhereInput_1 = require("../inputs/TaskDependencyWhereInput");
const TaskRelationFilter_1 = require("../inputs/TaskRelationFilter");
let TaskDependencyWhereUniqueInput = class TaskDependencyWhereUniqueInput {
};
exports.TaskDependencyWhereUniqueInput = TaskDependencyWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskDependencyWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyTaskIdDependsOnIdCompoundUniqueInput_1.TaskDependencyTaskIdDependsOnIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyTaskIdDependsOnIdCompoundUniqueInput_1.TaskDependencyTaskIdDependsOnIdCompoundUniqueInput)
], TaskDependencyWhereUniqueInput.prototype, "taskId_dependsOnId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyWhereInput_1.TaskDependencyWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyWhereInput_1.TaskDependencyWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyWhereInput_1.TaskDependencyWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TaskDependencyWhereUniqueInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TaskDependencyWhereUniqueInput.prototype, "dependsOnId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TaskDependencyWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskRelationFilter_1.TaskRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskRelationFilter_1.TaskRelationFilter)
], TaskDependencyWhereUniqueInput.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskRelationFilter_1.TaskRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskRelationFilter_1.TaskRelationFilter)
], TaskDependencyWhereUniqueInput.prototype, "dependsOn", void 0);
exports.TaskDependencyWhereUniqueInput = TaskDependencyWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyWhereUniqueInput", {})
], TaskDependencyWhereUniqueInput);
