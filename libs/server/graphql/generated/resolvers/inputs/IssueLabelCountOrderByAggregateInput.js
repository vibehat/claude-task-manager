"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let IssueLabelCountOrderByAggregateInput = class IssueLabelCountOrderByAggregateInput {
};
exports.IssueLabelCountOrderByAggregateInput = IssueLabelCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelCountOrderByAggregateInput.prototype, "issueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelCountOrderByAggregateInput.prototype, "labelId", void 0);
exports.IssueLabelCountOrderByAggregateInput = IssueLabelCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelCountOrderByAggregateInput", {})
], IssueLabelCountOrderByAggregateInput);
