"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnSyncConflict = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CreateManyAndReturnSyncConflict = class CreateManyAndReturnSyncConflict {
};
exports.CreateManyAndReturnSyncConflict = CreateManyAndReturnSyncConflict;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnSyncConflict.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnSyncConflict.prototype, "operationType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnSyncConflict.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnSyncConflict.prototype, "uiVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnSyncConflict.prototype, "cliVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAndReturnSyncConflict.prototype, "resolved", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnSyncConflict.prototype, "resolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyAndReturnSyncConflict.prototype, "resolvedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnSyncConflict.prototype, "resolvedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyAndReturnSyncConflict.prototype, "timestamp", void 0);
exports.CreateManyAndReturnSyncConflict = CreateManyAndReturnSyncConflict = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyAndReturnSyncConflict", {})
], CreateManyAndReturnSyncConflict);
