"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSyncOperationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneSyncOperationArgs_1 = require("./args/CreateOneSyncOperationArgs");
const SyncOperation_1 = require("../../../models/SyncOperation");
const helpers_1 = require("../../../helpers");
let CreateOneSyncOperationResolver = class CreateOneSyncOperationResolver {
    async createOneSyncOperation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneSyncOperationResolver = CreateOneSyncOperationResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SyncOperation_1.SyncOperation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSyncOperationArgs_1.CreateOneSyncOperationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneSyncOperationResolver.prototype, "createOneSyncOperation", null);
exports.CreateOneSyncOperationResolver = CreateOneSyncOperationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncOperation_1.SyncOperation)
], CreateOneSyncOperationResolver);
