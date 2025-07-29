"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySyncConflictResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupBySyncConflictArgs_1 = require("./args/GroupBySyncConflictArgs");
const SyncConflict_1 = require("../../../models/SyncConflict");
const SyncConflictGroupBy_1 = require("../../outputs/SyncConflictGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySyncConflictResolver = class GroupBySyncConflictResolver {
    async groupBySyncConflict(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupBySyncConflictResolver = GroupBySyncConflictResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SyncConflictGroupBy_1.SyncConflictGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySyncConflictArgs_1.GroupBySyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupBySyncConflictResolver.prototype, "groupBySyncConflict", null);
exports.GroupBySyncConflictResolver = GroupBySyncConflictResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncConflict_1.SyncConflict)
], GroupBySyncConflictResolver);
