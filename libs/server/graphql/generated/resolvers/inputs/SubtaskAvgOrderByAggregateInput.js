"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SubtaskAvgOrderByAggregateInput = class SubtaskAvgOrderByAggregateInput {
};
exports.SubtaskAvgOrderByAggregateInput = SubtaskAvgOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskAvgOrderByAggregateInput.prototype, "parentId", void 0);
exports.SubtaskAvgOrderByAggregateInput = SubtaskAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubtaskAvgOrderByAggregateInput", {})
], SubtaskAvgOrderByAggregateInput);
