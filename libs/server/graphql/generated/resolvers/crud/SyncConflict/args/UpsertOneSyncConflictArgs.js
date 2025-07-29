"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSyncConflictArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncConflictCreateInput_1 = require("../../../inputs/SyncConflictCreateInput");
const SyncConflictUpdateInput_1 = require("../../../inputs/SyncConflictUpdateInput");
const SyncConflictWhereUniqueInput_1 = require("../../../inputs/SyncConflictWhereUniqueInput");
let UpsertOneSyncConflictArgs = class UpsertOneSyncConflictArgs {
};
exports.UpsertOneSyncConflictArgs = UpsertOneSyncConflictArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictWhereUniqueInput_1.SyncConflictWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncConflictWhereUniqueInput_1.SyncConflictWhereUniqueInput)
], UpsertOneSyncConflictArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictCreateInput_1.SyncConflictCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncConflictCreateInput_1.SyncConflictCreateInput)
], UpsertOneSyncConflictArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictUpdateInput_1.SyncConflictUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncConflictUpdateInput_1.SyncConflictUpdateInput)
], UpsertOneSyncConflictArgs.prototype, "update", void 0);
exports.UpsertOneSyncConflictArgs = UpsertOneSyncConflictArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneSyncConflictArgs);
