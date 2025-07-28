"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSyncOperationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneSyncOperationArgs_1 = require("./args/UpsertOneSyncOperationArgs");
const SyncOperation_1 = require("../../../models/SyncOperation");
const helpers_1 = require("../../../helpers");
let UpsertOneSyncOperationResolver = class UpsertOneSyncOperationResolver {
    async upsertOneSyncOperation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneSyncOperationResolver = UpsertOneSyncOperationResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SyncOperation_1.SyncOperation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSyncOperationArgs_1.UpsertOneSyncOperationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneSyncOperationResolver.prototype, "upsertOneSyncOperation", null);
exports.UpsertOneSyncOperationResolver = UpsertOneSyncOperationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncOperation_1.SyncOperation)
], UpsertOneSyncOperationResolver);
