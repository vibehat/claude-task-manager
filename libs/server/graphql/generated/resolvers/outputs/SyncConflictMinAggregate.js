"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncConflictMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SyncConflictMinAggregate = class SyncConflictMinAggregate {
};
exports.SyncConflictMinAggregate = SyncConflictMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictMinAggregate.prototype, "operationType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictMinAggregate.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictMinAggregate.prototype, "uiVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictMinAggregate.prototype, "cliVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SyncConflictMinAggregate.prototype, "resolved", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictMinAggregate.prototype, "resolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SyncConflictMinAggregate.prototype, "resolvedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictMinAggregate.prototype, "resolvedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SyncConflictMinAggregate.prototype, "timestamp", void 0);
exports.SyncConflictMinAggregate = SyncConflictMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SyncConflictMinAggregate", {})
], SyncConflictMinAggregate);
