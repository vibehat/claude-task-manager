"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSyncOperationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneSyncOperationArgs_1 = require("./args/UpdateOneSyncOperationArgs");
const SyncOperation_1 = require("../../../models/SyncOperation");
const helpers_1 = require("../../../helpers");
let UpdateOneSyncOperationResolver = class UpdateOneSyncOperationResolver {
    async updateOneSyncOperation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneSyncOperationResolver = UpdateOneSyncOperationResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SyncOperation_1.SyncOperation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSyncOperationArgs_1.UpdateOneSyncOperationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneSyncOperationResolver.prototype, "updateOneSyncOperation", null);
exports.UpdateOneSyncOperationResolver = UpdateOneSyncOperationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncOperation_1.SyncOperation)
], UpdateOneSyncOperationResolver);
