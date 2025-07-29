"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySyncOperationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManySyncOperationArgs_1 = require("./args/FindManySyncOperationArgs");
const SyncOperation_1 = require("../../../models/SyncOperation");
const helpers_1 = require("../../../helpers");
let FindManySyncOperationResolver = class FindManySyncOperationResolver {
    async syncOperations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManySyncOperationResolver = FindManySyncOperationResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SyncOperation_1.SyncOperation], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySyncOperationArgs_1.FindManySyncOperationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManySyncOperationResolver.prototype, "syncOperations", null);
exports.FindManySyncOperationResolver = FindManySyncOperationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncOperation_1.SyncOperation)
], FindManySyncOperationResolver);
