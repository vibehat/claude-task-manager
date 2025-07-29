"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySyncOperationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupBySyncOperationArgs_1 = require("./args/GroupBySyncOperationArgs");
const SyncOperation_1 = require("../../../models/SyncOperation");
const SyncOperationGroupBy_1 = require("../../outputs/SyncOperationGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySyncOperationResolver = class GroupBySyncOperationResolver {
    async groupBySyncOperation(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupBySyncOperationResolver = GroupBySyncOperationResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SyncOperationGroupBy_1.SyncOperationGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySyncOperationArgs_1.GroupBySyncOperationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupBySyncOperationResolver.prototype, "groupBySyncOperation", null);
exports.GroupBySyncOperationResolver = GroupBySyncOperationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncOperation_1.SyncOperation)
], GroupBySyncOperationResolver);
