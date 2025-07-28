"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSyncOperationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateSyncOperationArgs_1 = require("./args/AggregateSyncOperationArgs");
const SyncOperation_1 = require("../../../models/SyncOperation");
const AggregateSyncOperation_1 = require("../../outputs/AggregateSyncOperation");
const helpers_1 = require("../../../helpers");
let AggregateSyncOperationResolver = class AggregateSyncOperationResolver {
    async aggregateSyncOperation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateSyncOperationResolver = AggregateSyncOperationResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSyncOperation_1.AggregateSyncOperation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSyncOperationArgs_1.AggregateSyncOperationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSyncOperationResolver.prototype, "aggregateSyncOperation", null);
exports.AggregateSyncOperationResolver = AggregateSyncOperationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncOperation_1.SyncOperation)
], AggregateSyncOperationResolver);
