"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SubtaskAvgOrderByAggregateInput_1 = require("../inputs/SubtaskAvgOrderByAggregateInput");
const SubtaskCountOrderByAggregateInput_1 = require("../inputs/SubtaskCountOrderByAggregateInput");
const SubtaskMaxOrderByAggregateInput_1 = require("../inputs/SubtaskMaxOrderByAggregateInput");
const SubtaskMinOrderByAggregateInput_1 = require("../inputs/SubtaskMinOrderByAggregateInput");
const SubtaskSumOrderByAggregateInput_1 = require("../inputs/SubtaskSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SubtaskOrderByWithAggregationInput = class SubtaskOrderByWithAggregationInput {
};
exports.SubtaskOrderByWithAggregationInput = SubtaskOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], SubtaskOrderByWithAggregationInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], SubtaskOrderByWithAggregationInput.prototype, "testStrategy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskOrderByWithAggregationInput.prototype, "parentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskOrderByWithAggregationInput.prototype, "dependencies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCountOrderByAggregateInput_1.SubtaskCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskCountOrderByAggregateInput_1.SubtaskCountOrderByAggregateInput)
], SubtaskOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskAvgOrderByAggregateInput_1.SubtaskAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskAvgOrderByAggregateInput_1.SubtaskAvgOrderByAggregateInput)
], SubtaskOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskMaxOrderByAggregateInput_1.SubtaskMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskMaxOrderByAggregateInput_1.SubtaskMaxOrderByAggregateInput)
], SubtaskOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskMinOrderByAggregateInput_1.SubtaskMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskMinOrderByAggregateInput_1.SubtaskMinOrderByAggregateInput)
], SubtaskOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskSumOrderByAggregateInput_1.SubtaskSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskSumOrderByAggregateInput_1.SubtaskSumOrderByAggregateInput)
], SubtaskOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.SubtaskOrderByWithAggregationInput = SubtaskOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubtaskOrderByWithAggregationInput", {})
], SubtaskOrderByWithAggregationInput);
