"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelCountOrderByAggregateInput_1 = require("../inputs/LabelCountOrderByAggregateInput");
const LabelMaxOrderByAggregateInput_1 = require("../inputs/LabelMaxOrderByAggregateInput");
const LabelMinOrderByAggregateInput_1 = require("../inputs/LabelMinOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LabelOrderByWithAggregationInput = class LabelOrderByWithAggregationInput {
};
exports.LabelOrderByWithAggregationInput = LabelOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LabelOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LabelOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LabelOrderByWithAggregationInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], LabelOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LabelOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LabelOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelCountOrderByAggregateInput_1.LabelCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelCountOrderByAggregateInput_1.LabelCountOrderByAggregateInput)
], LabelOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelMaxOrderByAggregateInput_1.LabelMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelMaxOrderByAggregateInput_1.LabelMaxOrderByAggregateInput)
], LabelOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelMinOrderByAggregateInput_1.LabelMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelMinOrderByAggregateInput_1.LabelMinOrderByAggregateInput)
], LabelOrderByWithAggregationInput.prototype, "_min", void 0);
exports.LabelOrderByWithAggregationInput = LabelOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LabelOrderByWithAggregationInput", {})
], LabelOrderByWithAggregationInput);
