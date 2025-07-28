"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyAvgOrderByAggregateInput_1 = require("../inputs/TaskDependencyAvgOrderByAggregateInput");
const TaskDependencyCountOrderByAggregateInput_1 = require("../inputs/TaskDependencyCountOrderByAggregateInput");
const TaskDependencyMaxOrderByAggregateInput_1 = require("../inputs/TaskDependencyMaxOrderByAggregateInput");
const TaskDependencyMinOrderByAggregateInput_1 = require("../inputs/TaskDependencyMinOrderByAggregateInput");
const TaskDependencySumOrderByAggregateInput_1 = require("../inputs/TaskDependencySumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TaskDependencyOrderByWithAggregationInput = class TaskDependencyOrderByWithAggregationInput {
};
exports.TaskDependencyOrderByWithAggregationInput = TaskDependencyOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskDependencyOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskDependencyOrderByWithAggregationInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskDependencyOrderByWithAggregationInput.prototype, "dependsOnId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskDependencyOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyCountOrderByAggregateInput_1.TaskDependencyCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyCountOrderByAggregateInput_1.TaskDependencyCountOrderByAggregateInput)
], TaskDependencyOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyAvgOrderByAggregateInput_1.TaskDependencyAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyAvgOrderByAggregateInput_1.TaskDependencyAvgOrderByAggregateInput)
], TaskDependencyOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyMaxOrderByAggregateInput_1.TaskDependencyMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyMaxOrderByAggregateInput_1.TaskDependencyMaxOrderByAggregateInput)
], TaskDependencyOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyMinOrderByAggregateInput_1.TaskDependencyMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyMinOrderByAggregateInput_1.TaskDependencyMinOrderByAggregateInput)
], TaskDependencyOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencySumOrderByAggregateInput_1.TaskDependencySumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencySumOrderByAggregateInput_1.TaskDependencySumOrderByAggregateInput)
], TaskDependencyOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.TaskDependencyOrderByWithAggregationInput = TaskDependencyOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyOrderByWithAggregationInput", {})
], TaskDependencyOrderByWithAggregationInput);
