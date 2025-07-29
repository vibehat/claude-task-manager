"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let IssuePriorityAvgOrderByAggregateInput = class IssuePriorityAvgOrderByAggregateInput {
};
exports.IssuePriorityAvgOrderByAggregateInput = IssuePriorityAvgOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityAvgOrderByAggregateInput.prototype, "order", void 0);
exports.IssuePriorityAvgOrderByAggregateInput = IssuePriorityAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssuePriorityAvgOrderByAggregateInput", {})
], IssuePriorityAvgOrderByAggregateInput);
