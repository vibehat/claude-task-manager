"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TaskAvgOrderByAggregateInput = class TaskAvgOrderByAggregateInput {
};
exports.TaskAvgOrderByAggregateInput = TaskAvgOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskAvgOrderByAggregateInput.prototype, "complexity", void 0);
exports.TaskAvgOrderByAggregateInput = TaskAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskAvgOrderByAggregateInput", {})
], TaskAvgOrderByAggregateInput);
