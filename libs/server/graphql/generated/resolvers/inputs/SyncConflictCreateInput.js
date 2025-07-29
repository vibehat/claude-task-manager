"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncConflictCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SyncConflictCreateInput = class SyncConflictCreateInput {
};
exports.SyncConflictCreateInput = SyncConflictCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictCreateInput.prototype, "operationType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictCreateInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictCreateInput.prototype, "uiVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictCreateInput.prototype, "cliVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SyncConflictCreateInput.prototype, "resolved", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictCreateInput.prototype, "resolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SyncConflictCreateInput.prototype, "resolvedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictCreateInput.prototype, "resolvedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SyncConflictCreateInput.prototype, "timestamp", void 0);
exports.SyncConflictCreateInput = SyncConflictCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SyncConflictCreateInput", {})
], SyncConflictCreateInput);
