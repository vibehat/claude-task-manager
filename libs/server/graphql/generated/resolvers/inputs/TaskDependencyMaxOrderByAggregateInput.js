"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TaskDependencyMaxOrderByAggregateInput = class TaskDependencyMaxOrderByAggregateInput {
};
exports.TaskDependencyMaxOrderByAggregateInput = TaskDependencyMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskDependencyMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskDependencyMaxOrderByAggregateInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskDependencyMaxOrderByAggregateInput.prototype, "dependsOnId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskDependencyMaxOrderByAggregateInput.prototype, "createdAt", void 0);
exports.TaskDependencyMaxOrderByAggregateInput = TaskDependencyMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyMaxOrderByAggregateInput", {})
], TaskDependencyMaxOrderByAggregateInput);
