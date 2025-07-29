"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncConflictCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SyncConflictCreateManyInput = class SyncConflictCreateManyInput {
};
exports.SyncConflictCreateManyInput = SyncConflictCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictCreateManyInput.prototype, "operationType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictCreateManyInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictCreateManyInput.prototype, "uiVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictCreateManyInput.prototype, "cliVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SyncConflictCreateManyInput.prototype, "resolved", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictCreateManyInput.prototype, "resolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SyncConflictCreateManyInput.prototype, "resolvedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SyncConflictCreateManyInput.prototype, "resolvedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SyncConflictCreateManyInput.prototype, "timestamp", void 0);
exports.SyncConflictCreateManyInput = SyncConflictCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SyncConflictCreateManyInput", {})
], SyncConflictCreateManyInput);
