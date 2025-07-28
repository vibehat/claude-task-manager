"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleAvgOrderByAggregateInput_1 = require("../inputs/CycleAvgOrderByAggregateInput");
const CycleCountOrderByAggregateInput_1 = require("../inputs/CycleCountOrderByAggregateInput");
const CycleMaxOrderByAggregateInput_1 = require("../inputs/CycleMaxOrderByAggregateInput");
const CycleMinOrderByAggregateInput_1 = require("../inputs/CycleMinOrderByAggregateInput");
const CycleSumOrderByAggregateInput_1 = require("../inputs/CycleSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CycleOrderByWithAggregationInput = class CycleOrderByWithAggregationInput {
};
exports.CycleOrderByWithAggregationInput = CycleOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleOrderByWithAggregationInput.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleOrderByWithAggregationInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleOrderByWithAggregationInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleOrderByWithAggregationInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleOrderByWithAggregationInput.prototype, "progress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleCountOrderByAggregateInput_1.CycleCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleCountOrderByAggregateInput_1.CycleCountOrderByAggregateInput)
], CycleOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleAvgOrderByAggregateInput_1.CycleAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleAvgOrderByAggregateInput_1.CycleAvgOrderByAggregateInput)
], CycleOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleMaxOrderByAggregateInput_1.CycleMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleMaxOrderByAggregateInput_1.CycleMaxOrderByAggregateInput)
], CycleOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleMinOrderByAggregateInput_1.CycleMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleMinOrderByAggregateInput_1.CycleMinOrderByAggregateInput)
], CycleOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleSumOrderByAggregateInput_1.CycleSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleSumOrderByAggregateInput_1.CycleSumOrderByAggregateInput)
], CycleOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.CycleOrderByWithAggregationInput = CycleOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CycleOrderByWithAggregationInput", {})
], CycleOrderByWithAggregationInput);
