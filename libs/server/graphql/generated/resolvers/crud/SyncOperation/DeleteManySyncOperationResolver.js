"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySyncOperationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManySyncOperationArgs_1 = require("./args/DeleteManySyncOperationArgs");
const SyncOperation_1 = require("../../../models/SyncOperation");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManySyncOperationResolver = class DeleteManySyncOperationResolver {
    async deleteManySyncOperation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManySyncOperationResolver = DeleteManySyncOperationResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySyncOperationArgs_1.DeleteManySyncOperationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManySyncOperationResolver.prototype, "deleteManySyncOperation", null);
exports.DeleteManySyncOperationResolver = DeleteManySyncOperationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncOperation_1.SyncOperation)
], DeleteManySyncOperationResolver);
