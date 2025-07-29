"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelCountOrderByAggregateInput_1 = require("../inputs/IssueLabelCountOrderByAggregateInput");
const IssueLabelMaxOrderByAggregateInput_1 = require("../inputs/IssueLabelMaxOrderByAggregateInput");
const IssueLabelMinOrderByAggregateInput_1 = require("../inputs/IssueLabelMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let IssueLabelOrderByWithAggregationInput = class IssueLabelOrderByWithAggregationInput {
};
exports.IssueLabelOrderByWithAggregationInput = IssueLabelOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelOrderByWithAggregationInput.prototype, "issueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelOrderByWithAggregationInput.prototype, "labelId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelCountOrderByAggregateInput_1.IssueLabelCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelCountOrderByAggregateInput_1.IssueLabelCountOrderByAggregateInput)
], IssueLabelOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelMaxOrderByAggregateInput_1.IssueLabelMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelMaxOrderByAggregateInput_1.IssueLabelMaxOrderByAggregateInput)
], IssueLabelOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelMinOrderByAggregateInput_1.IssueLabelMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelMinOrderByAggregateInput_1.IssueLabelMinOrderByAggregateInput)
], IssueLabelOrderByWithAggregationInput.prototype, "_min", void 0);
exports.IssueLabelOrderByWithAggregationInput = IssueLabelOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelOrderByWithAggregationInput", {})
], IssueLabelOrderByWithAggregationInput);
