"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSyncConflictResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateSyncConflictArgs_1 = require("./args/AggregateSyncConflictArgs");
const SyncConflict_1 = require("../../../models/SyncConflict");
const AggregateSyncConflict_1 = require("../../outputs/AggregateSyncConflict");
const helpers_1 = require("../../../helpers");
let AggregateSyncConflictResolver = class AggregateSyncConflictResolver {
    async aggregateSyncConflict(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateSyncConflictResolver = AggregateSyncConflictResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSyncConflict_1.AggregateSyncConflict, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSyncConflictArgs_1.AggregateSyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSyncConflictResolver.prototype, "aggregateSyncConflict", null);
exports.AggregateSyncConflictResolver = AggregateSyncConflictResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncConflict_1.SyncConflict)
], AggregateSyncConflictResolver);
