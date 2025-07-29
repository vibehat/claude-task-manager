"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSyncOperationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueSyncOperationArgs_1 = require("./args/FindUniqueSyncOperationArgs");
const SyncOperation_1 = require("../../../models/SyncOperation");
const helpers_1 = require("../../../helpers");
let FindUniqueSyncOperationResolver = class FindUniqueSyncOperationResolver {
    async syncOperation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueSyncOperationResolver = FindUniqueSyncOperationResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SyncOperation_1.SyncOperation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSyncOperationArgs_1.FindUniqueSyncOperationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueSyncOperationResolver.prototype, "syncOperation", null);
exports.FindUniqueSyncOperationResolver = FindUniqueSyncOperationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncOperation_1.SyncOperation)
], FindUniqueSyncOperationResolver);
