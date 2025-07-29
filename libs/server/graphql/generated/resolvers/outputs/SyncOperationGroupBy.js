"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncOperationGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncOperationAvgAggregate_1 = require("../outputs/SyncOperationAvgAggregate");
const SyncOperationCountAggregate_1 = require("../outputs/SyncOperationCountAggregate");
const SyncOperationMaxAggregate_1 = require("../outputs/SyncOperationMaxAggregate");
const SyncOperationMinAggregate_1 = require("../outputs/SyncOperationMinAggregate");
const SyncOperationSumAggregate_1 = require("../outputs/SyncOperationSumAggregate");
let SyncOperationGroupBy = class SyncOperationGroupBy {
};
exports.SyncOperationGroupBy = SyncOperationGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SyncOperationGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SyncOperationGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SyncOperationGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SyncOperationGroupBy.prototype, "source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SyncOperationGroupBy.prototype, "timestamp", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SyncOperationGroupBy.prototype, "completedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SyncOperationGroupBy.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncOperationGroupBy.prototype, "rollbackData", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncOperationGroupBy.prototype, "metadata", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SyncOperationGroupBy.prototype, "retryCount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SyncOperationGroupBy.prototype, "maxRetries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncOperationGroupBy.prototype, "error", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SyncOperationGroupBy.prototype, "taskIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationCountAggregate_1.SyncOperationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationCountAggregate_1.SyncOperationCountAggregate)
], SyncOperationGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationAvgAggregate_1.SyncOperationAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationAvgAggregate_1.SyncOperationAvgAggregate)
], SyncOperationGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationSumAggregate_1.SyncOperationSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationSumAggregate_1.SyncOperationSumAggregate)
], SyncOperationGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationMinAggregate_1.SyncOperationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationMinAggregate_1.SyncOperationMinAggregate)
], SyncOperationGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationMaxAggregate_1.SyncOperationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationMaxAggregate_1.SyncOperationMaxAggregate)
], SyncOperationGroupBy.prototype, "_max", void 0);
exports.SyncOperationGroupBy = SyncOperationGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SyncOperationGroupBy", {})
], SyncOperationGroupBy);
