"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSyncConflictArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncConflictUpdateInput_1 = require("../../../inputs/SyncConflictUpdateInput");
const SyncConflictWhereUniqueInput_1 = require("../../../inputs/SyncConflictWhereUniqueInput");
let UpdateOneSyncConflictArgs = class UpdateOneSyncConflictArgs {
};
exports.UpdateOneSyncConflictArgs = UpdateOneSyncConflictArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictUpdateInput_1.SyncConflictUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncConflictUpdateInput_1.SyncConflictUpdateInput)
], UpdateOneSyncConflictArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictWhereUniqueInput_1.SyncConflictWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncConflictWhereUniqueInput_1.SyncConflictWhereUniqueInput)
], UpdateOneSyncConflictArgs.prototype, "where", void 0);
exports.UpdateOneSyncConflictArgs = UpdateOneSyncConflictArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneSyncConflictArgs);
