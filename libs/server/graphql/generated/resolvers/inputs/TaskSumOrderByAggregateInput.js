"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TaskSumOrderByAggregateInput = class TaskSumOrderByAggregateInput {
};
exports.TaskSumOrderByAggregateInput = TaskSumOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskSumOrderByAggregateInput.prototype, "complexity", void 0);
exports.TaskSumOrderByAggregateInput = TaskSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskSumOrderByAggregateInput", {})
], TaskSumOrderByAggregateInput);
