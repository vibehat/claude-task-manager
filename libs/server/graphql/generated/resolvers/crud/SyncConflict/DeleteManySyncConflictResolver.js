"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySyncConflictResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManySyncConflictArgs_1 = require("./args/DeleteManySyncConflictArgs");
const SyncConflict_1 = require("../../../models/SyncConflict");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManySyncConflictResolver = class DeleteManySyncConflictResolver {
    async deleteManySyncConflict(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManySyncConflictResolver = DeleteManySyncConflictResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySyncConflictArgs_1.DeleteManySyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManySyncConflictResolver.prototype, "deleteManySyncConflict", null);
exports.DeleteManySyncConflictResolver = DeleteManySyncConflictResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncConflict_1.SyncConflict)
], DeleteManySyncConflictResolver);
