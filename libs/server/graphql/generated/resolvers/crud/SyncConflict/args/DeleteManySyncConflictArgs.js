"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySyncConflictArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncConflictWhereInput_1 = require("../../../inputs/SyncConflictWhereInput");
let DeleteManySyncConflictArgs = class DeleteManySyncConflictArgs {
};
exports.DeleteManySyncConflictArgs = DeleteManySyncConflictArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictWhereInput_1.SyncConflictWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncConflictWhereInput_1.SyncConflictWhereInput)
], DeleteManySyncConflictArgs.prototype, "where", void 0);
exports.DeleteManySyncConflictArgs = DeleteManySyncConflictArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySyncConflictArgs);
