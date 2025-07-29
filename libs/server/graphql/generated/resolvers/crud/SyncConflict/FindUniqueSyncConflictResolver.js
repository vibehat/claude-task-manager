"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSyncConflictResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueSyncConflictArgs_1 = require("./args/FindUniqueSyncConflictArgs");
const SyncConflict_1 = require("../../../models/SyncConflict");
const helpers_1 = require("../../../helpers");
let FindUniqueSyncConflictResolver = class FindUniqueSyncConflictResolver {
    async syncConflict(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueSyncConflictResolver = FindUniqueSyncConflictResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SyncConflict_1.SyncConflict, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSyncConflictArgs_1.FindUniqueSyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueSyncConflictResolver.prototype, "syncConflict", null);
exports.FindUniqueSyncConflictResolver = FindUniqueSyncConflictResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncConflict_1.SyncConflict)
], FindUniqueSyncConflictResolver);
