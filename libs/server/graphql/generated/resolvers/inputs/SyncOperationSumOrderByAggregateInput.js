"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncOperationSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SyncOperationSumOrderByAggregateInput = class SyncOperationSumOrderByAggregateInput {
};
exports.SyncOperationSumOrderByAggregateInput = SyncOperationSumOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncOperationSumOrderByAggregateInput.prototype, "retryCount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncOperationSumOrderByAggregateInput.prototype, "maxRetries", void 0);
exports.SyncOperationSumOrderByAggregateInput = SyncOperationSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SyncOperationSumOrderByAggregateInput", {})
], SyncOperationSumOrderByAggregateInput);
