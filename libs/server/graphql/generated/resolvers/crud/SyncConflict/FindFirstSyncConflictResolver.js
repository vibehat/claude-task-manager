"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSyncConflictResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstSyncConflictArgs_1 = require("./args/FindFirstSyncConflictArgs");
const SyncConflict_1 = require("../../../models/SyncConflict");
const helpers_1 = require("../../../helpers");
let FindFirstSyncConflictResolver = class FindFirstSyncConflictResolver {
    async findFirstSyncConflict(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstSyncConflictResolver = FindFirstSyncConflictResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SyncConflict_1.SyncConflict, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSyncConflictArgs_1.FindFirstSyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstSyncConflictResolver.prototype, "findFirstSyncConflict", null);
exports.FindFirstSyncConflictResolver = FindFirstSyncConflictResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncConflict_1.SyncConflict)
], FindFirstSyncConflictResolver);
