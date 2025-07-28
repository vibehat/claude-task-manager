"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TaskDependencyMinOrderByAggregateInput = class TaskDependencyMinOrderByAggregateInput {
};
exports.TaskDependencyMinOrderByAggregateInput = TaskDependencyMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskDependencyMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskDependencyMinOrderByAggregateInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskDependencyMinOrderByAggregateInput.prototype, "dependsOnId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskDependencyMinOrderByAggregateInput.prototype, "createdAt", void 0);
exports.TaskDependencyMinOrderByAggregateInput = TaskDependencyMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyMinOrderByAggregateInput", {})
], TaskDependencyMinOrderByAggregateInput);
