"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncConflictOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SyncConflictCountOrderByAggregateInput_1 = require("../inputs/SyncConflictCountOrderByAggregateInput");
const SyncConflictMaxOrderByAggregateInput_1 = require("../inputs/SyncConflictMaxOrderByAggregateInput");
const SyncConflictMinOrderByAggregateInput_1 = require("../inputs/SyncConflictMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SyncConflictOrderByWithAggregationInput = class SyncConflictOrderByWithAggregationInput {
};
exports.SyncConflictOrderByWithAggregationInput = SyncConflictOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictOrderByWithAggregationInput.prototype, "operationType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictOrderByWithAggregationInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictOrderByWithAggregationInput.prototype, "uiVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictOrderByWithAggregationInput.prototype, "cliVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictOrderByWithAggregationInput.prototype, "resolved", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], SyncConflictOrderByWithAggregationInput.prototype, "resolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], SyncConflictOrderByWithAggregationInput.prototype, "resolvedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], SyncConflictOrderByWithAggregationInput.prototype, "resolvedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictOrderByWithAggregationInput.prototype, "timestamp", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictCountOrderByAggregateInput_1.SyncConflictCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncConflictCountOrderByAggregateInput_1.SyncConflictCountOrderByAggregateInput)
], SyncConflictOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictMaxOrderByAggregateInput_1.SyncConflictMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncConflictMaxOrderByAggregateInput_1.SyncConflictMaxOrderByAggregateInput)
], SyncConflictOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictMinOrderByAggregateInput_1.SyncConflictMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncConflictMinOrderByAggregateInput_1.SyncConflictMinOrderByAggregateInput)
], SyncConflictOrderByWithAggregationInput.prototype, "_min", void 0);
exports.SyncConflictOrderByWithAggregationInput = SyncConflictOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SyncConflictOrderByWithAggregationInput", {})
], SyncConflictOrderByWithAggregationInput);
