"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSyncConflictArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncConflictCreateInput_1 = require("../../../inputs/SyncConflictCreateInput");
let CreateOneSyncConflictArgs = class CreateOneSyncConflictArgs {
};
exports.CreateOneSyncConflictArgs = CreateOneSyncConflictArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictCreateInput_1.SyncConflictCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncConflictCreateInput_1.SyncConflictCreateInput)
], CreateOneSyncConflictArgs.prototype, "data", void 0);
exports.CreateOneSyncConflictArgs = CreateOneSyncConflictArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneSyncConflictArgs);
