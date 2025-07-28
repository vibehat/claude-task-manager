"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncConflictGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncConflictCountAggregate_1 = require("../outputs/SyncConflictCountAggregate");
const SyncConflictMaxAggregate_1 = require("../outputs/SyncConflictMaxAggregate");
const SyncConflictMinAggregate_1 = require("../outputs/SyncConflictMinAggregate");
let SyncConflictGroupBy = class SyncConflictGroupBy {
};
exports.SyncConflictGroupBy = SyncConflictGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictGroupBy.prototype, "operationType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictGroupBy.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictGroupBy.prototype, "uiVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictGroupBy.prototype, "cliVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], SyncConflictGroupBy.prototype, "resolved", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictGroupBy.prototype, "resolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SyncConflictGroupBy.prototype, "resolvedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictGroupBy.prototype, "resolvedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SyncConflictGroupBy.prototype, "timestamp", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictCountAggregate_1.SyncConflictCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncConflictCountAggregate_1.SyncConflictCountAggregate)
], SyncConflictGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictMinAggregate_1.SyncConflictMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncConflictMinAggregate_1.SyncConflictMinAggregate)
], SyncConflictGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictMaxAggregate_1.SyncConflictMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncConflictMaxAggregate_1.SyncConflictMaxAggregate)
], SyncConflictGroupBy.prototype, "_max", void 0);
exports.SyncConflictGroupBy = SyncConflictGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SyncConflictGroupBy", {})
], SyncConflictGroupBy);
