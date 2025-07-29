"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncConflictMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SyncConflictMaxOrderByAggregateInput = class SyncConflictMaxOrderByAggregateInput {
};
exports.SyncConflictMaxOrderByAggregateInput = SyncConflictMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictMaxOrderByAggregateInput.prototype, "operationType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictMaxOrderByAggregateInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictMaxOrderByAggregateInput.prototype, "uiVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictMaxOrderByAggregateInput.prototype, "cliVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictMaxOrderByAggregateInput.prototype, "resolved", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictMaxOrderByAggregateInput.prototype, "resolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictMaxOrderByAggregateInput.prototype, "resolvedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictMaxOrderByAggregateInput.prototype, "resolvedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictMaxOrderByAggregateInput.prototype, "timestamp", void 0);
exports.SyncConflictMaxOrderByAggregateInput = SyncConflictMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SyncConflictMaxOrderByAggregateInput", {})
], SyncConflictMaxOrderByAggregateInput);
