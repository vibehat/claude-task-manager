"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencySumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TaskDependencySumOrderByAggregateInput = class TaskDependencySumOrderByAggregateInput {
};
exports.TaskDependencySumOrderByAggregateInput = TaskDependencySumOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskDependencySumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskDependencySumOrderByAggregateInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskDependencySumOrderByAggregateInput.prototype, "dependsOnId", void 0);
exports.TaskDependencySumOrderByAggregateInput = TaskDependencySumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencySumOrderByAggregateInput", {})
], TaskDependencySumOrderByAggregateInput);
