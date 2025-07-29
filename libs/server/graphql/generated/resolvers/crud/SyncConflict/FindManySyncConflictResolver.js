"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySyncConflictResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManySyncConflictArgs_1 = require("./args/FindManySyncConflictArgs");
const SyncConflict_1 = require("../../../models/SyncConflict");
const helpers_1 = require("../../../helpers");
let FindManySyncConflictResolver = class FindManySyncConflictResolver {
    async syncConflicts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManySyncConflictResolver = FindManySyncConflictResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SyncConflict_1.SyncConflict], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySyncConflictArgs_1.FindManySyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManySyncConflictResolver.prototype, "syncConflicts", null);
exports.FindManySyncConflictResolver = FindManySyncConflictResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncConflict_1.SyncConflict)
], FindManySyncConflictResolver);
