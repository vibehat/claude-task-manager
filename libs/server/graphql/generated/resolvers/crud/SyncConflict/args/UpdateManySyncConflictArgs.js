"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySyncConflictArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncConflictUpdateManyMutationInput_1 = require("../../../inputs/SyncConflictUpdateManyMutationInput");
const SyncConflictWhereInput_1 = require("../../../inputs/SyncConflictWhereInput");
let UpdateManySyncConflictArgs = class UpdateManySyncConflictArgs {
};
exports.UpdateManySyncConflictArgs = UpdateManySyncConflictArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictUpdateManyMutationInput_1.SyncConflictUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncConflictUpdateManyMutationInput_1.SyncConflictUpdateManyMutationInput)
], UpdateManySyncConflictArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictWhereInput_1.SyncConflictWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncConflictWhereInput_1.SyncConflictWhereInput)
], UpdateManySyncConflictArgs.prototype, "where", void 0);
exports.UpdateManySyncConflictArgs = UpdateManySyncConflictArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySyncConflictArgs);
