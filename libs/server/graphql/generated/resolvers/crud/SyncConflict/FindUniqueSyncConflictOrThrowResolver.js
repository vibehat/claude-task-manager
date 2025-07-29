"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSyncConflictOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueSyncConflictOrThrowArgs_1 = require("./args/FindUniqueSyncConflictOrThrowArgs");
const SyncConflict_1 = require("../../../models/SyncConflict");
const helpers_1 = require("../../../helpers");
let FindUniqueSyncConflictOrThrowResolver = class FindUniqueSyncConflictOrThrowResolver {
    async getSyncConflict(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueSyncConflictOrThrowResolver = FindUniqueSyncConflictOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SyncConflict_1.SyncConflict, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSyncConflictOrThrowArgs_1.FindUniqueSyncConflictOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueSyncConflictOrThrowResolver.prototype, "getSyncConflict", null);
exports.FindUniqueSyncConflictOrThrowResolver = FindUniqueSyncConflictOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncConflict_1.SyncConflict)
], FindUniqueSyncConflictOrThrowResolver);
