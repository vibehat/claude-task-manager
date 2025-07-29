"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSyncConflictResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneSyncConflictArgs_1 = require("./args/UpdateOneSyncConflictArgs");
const SyncConflict_1 = require("../../../models/SyncConflict");
const helpers_1 = require("../../../helpers");
let UpdateOneSyncConflictResolver = class UpdateOneSyncConflictResolver {
    async updateOneSyncConflict(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneSyncConflictResolver = UpdateOneSyncConflictResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SyncConflict_1.SyncConflict, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSyncConflictArgs_1.UpdateOneSyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneSyncConflictResolver.prototype, "updateOneSyncConflict", null);
exports.UpdateOneSyncConflictResolver = UpdateOneSyncConflictResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncConflict_1.SyncConflict)
], UpdateOneSyncConflictResolver);
