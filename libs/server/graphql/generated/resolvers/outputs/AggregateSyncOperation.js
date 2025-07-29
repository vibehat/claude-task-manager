"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSyncOperation = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncOperationAvgAggregate_1 = require("../outputs/SyncOperationAvgAggregate");
const SyncOperationCountAggregate_1 = require("../outputs/SyncOperationCountAggregate");
const SyncOperationMaxAggregate_1 = require("../outputs/SyncOperationMaxAggregate");
const SyncOperationMinAggregate_1 = require("../outputs/SyncOperationMinAggregate");
const SyncOperationSumAggregate_1 = require("../outputs/SyncOperationSumAggregate");
let AggregateSyncOperation = class AggregateSyncOperation {
};
exports.AggregateSyncOperation = AggregateSyncOperation;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationCountAggregate_1.SyncOperationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationCountAggregate_1.SyncOperationCountAggregate)
], AggregateSyncOperation.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationAvgAggregate_1.SyncOperationAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationAvgAggregate_1.SyncOperationAvgAggregate)
], AggregateSyncOperation.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationSumAggregate_1.SyncOperationSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationSumAggregate_1.SyncOperationSumAggregate)
], AggregateSyncOperation.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationMinAggregate_1.SyncOperationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationMinAggregate_1.SyncOperationMinAggregate)
], AggregateSyncOperation.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationMaxAggregate_1.SyncOperationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationMaxAggregate_1.SyncOperationMaxAggregate)
], AggregateSyncOperation.prototype, "_max", void 0);
exports.AggregateSyncOperation = AggregateSyncOperation = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSyncOperation", {})
], AggregateSyncOperation);
