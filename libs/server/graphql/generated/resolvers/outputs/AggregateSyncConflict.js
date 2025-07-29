"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSyncConflict = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncConflictCountAggregate_1 = require("../outputs/SyncConflictCountAggregate");
const SyncConflictMaxAggregate_1 = require("../outputs/SyncConflictMaxAggregate");
const SyncConflictMinAggregate_1 = require("../outputs/SyncConflictMinAggregate");
let AggregateSyncConflict = class AggregateSyncConflict {
};
exports.AggregateSyncConflict = AggregateSyncConflict;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictCountAggregate_1.SyncConflictCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncConflictCountAggregate_1.SyncConflictCountAggregate)
], AggregateSyncConflict.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictMinAggregate_1.SyncConflictMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncConflictMinAggregate_1.SyncConflictMinAggregate)
], AggregateSyncConflict.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictMaxAggregate_1.SyncConflictMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncConflictMaxAggregate_1.SyncConflictMaxAggregate)
], AggregateSyncConflict.prototype, "_max", void 0);
exports.AggregateSyncConflict = AggregateSyncConflict = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSyncConflict", {})
], AggregateSyncConflict);
