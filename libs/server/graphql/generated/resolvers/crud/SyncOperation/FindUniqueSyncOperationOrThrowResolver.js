"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSyncOperationOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueSyncOperationOrThrowArgs_1 = require("./args/FindUniqueSyncOperationOrThrowArgs");
const SyncOperation_1 = require("../../../models/SyncOperation");
const helpers_1 = require("../../../helpers");
let FindUniqueSyncOperationOrThrowResolver = class FindUniqueSyncOperationOrThrowResolver {
    async getSyncOperation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueSyncOperationOrThrowResolver = FindUniqueSyncOperationOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SyncOperation_1.SyncOperation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSyncOperationOrThrowArgs_1.FindUniqueSyncOperationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueSyncOperationOrThrowResolver.prototype, "getSyncOperation", null);
exports.FindUniqueSyncOperationOrThrowResolver = FindUniqueSyncOperationOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncOperation_1.SyncOperation)
], FindUniqueSyncOperationOrThrowResolver);
