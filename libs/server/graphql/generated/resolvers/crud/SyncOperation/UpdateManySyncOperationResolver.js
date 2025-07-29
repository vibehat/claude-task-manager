"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySyncOperationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManySyncOperationArgs_1 = require("./args/UpdateManySyncOperationArgs");
const SyncOperation_1 = require("../../../models/SyncOperation");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManySyncOperationResolver = class UpdateManySyncOperationResolver {
    async updateManySyncOperation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManySyncOperationResolver = UpdateManySyncOperationResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySyncOperationArgs_1.UpdateManySyncOperationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManySyncOperationResolver.prototype, "updateManySyncOperation", null);
exports.UpdateManySyncOperationResolver = UpdateManySyncOperationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncOperation_1.SyncOperation)
], UpdateManySyncOperationResolver);
