"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let IssueLabelMaxOrderByAggregateInput = class IssueLabelMaxOrderByAggregateInput {
};
exports.IssueLabelMaxOrderByAggregateInput = IssueLabelMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelMaxOrderByAggregateInput.prototype, "issueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelMaxOrderByAggregateInput.prototype, "labelId", void 0);
exports.IssueLabelMaxOrderByAggregateInput = IssueLabelMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelMaxOrderByAggregateInput", {})
], IssueLabelMaxOrderByAggregateInput);
