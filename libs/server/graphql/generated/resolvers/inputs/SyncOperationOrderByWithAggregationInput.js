"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncOperationOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SyncOperationAvgOrderByAggregateInput_1 = require("../inputs/SyncOperationAvgOrderByAggregateInput");
const SyncOperationCountOrderByAggregateInput_1 = require("../inputs/SyncOperationCountOrderByAggregateInput");
const SyncOperationMaxOrderByAggregateInput_1 = require("../inputs/SyncOperationMaxOrderByAggregateInput");
const SyncOperationMinOrderByAggregateInput_1 = require("../inputs/SyncOperationMinOrderByAggregateInput");
const SyncOperationSumOrderByAggregateInput_1 = require("../inputs/SyncOperationSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SyncOperationOrderByWithAggregationInput = class SyncOperationOrderByWithAggregationInput {
};
exports.SyncOperationOrderByWithAggregationInput = SyncOperationOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncOperationOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncOperationOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncOperationOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncOperationOrderByWithAggregationInput.prototype, "source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncOperationOrderByWithAggregationInput.prototype, "timestamp", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], SyncOperationOrderByWithAggregationInput.prototype, "completedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncOperationOrderByWithAggregationInput.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], SyncOperationOrderByWithAggregationInput.prototype, "rollbackData", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], SyncOperationOrderByWithAggregationInput.prototype, "metadata", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncOperationOrderByWithAggregationInput.prototype, "retryCount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncOperationOrderByWithAggregationInput.prototype, "maxRetries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], SyncOperationOrderByWithAggregationInput.prototype, "error", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncOperationOrderByWithAggregationInput.prototype, "taskIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationCountOrderByAggregateInput_1.SyncOperationCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationCountOrderByAggregateInput_1.SyncOperationCountOrderByAggregateInput)
], SyncOperationOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationAvgOrderByAggregateInput_1.SyncOperationAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationAvgOrderByAggregateInput_1.SyncOperationAvgOrderByAggregateInput)
], SyncOperationOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationMaxOrderByAggregateInput_1.SyncOperationMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationMaxOrderByAggregateInput_1.SyncOperationMaxOrderByAggregateInput)
], SyncOperationOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationMinOrderByAggregateInput_1.SyncOperationMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationMinOrderByAggregateInput_1.SyncOperationMinOrderByAggregateInput)
], SyncOperationOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationSumOrderByAggregateInput_1.SyncOperationSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationSumOrderByAggregateInput_1.SyncOperationSumOrderByAggregateInput)
], SyncOperationOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.SyncOperationOrderByWithAggregationInput = SyncOperationOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SyncOperationOrderByWithAggregationInput", {})
], SyncOperationOrderByWithAggregationInput);
