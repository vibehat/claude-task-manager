"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let IssueLabelMinOrderByAggregateInput = class IssueLabelMinOrderByAggregateInput {
};
exports.IssueLabelMinOrderByAggregateInput = IssueLabelMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelMinOrderByAggregateInput.prototype, "issueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelMinOrderByAggregateInput.prototype, "labelId", void 0);
exports.IssueLabelMinOrderByAggregateInput = IssueLabelMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelMinOrderByAggregateInput", {})
], IssueLabelMinOrderByAggregateInput);
