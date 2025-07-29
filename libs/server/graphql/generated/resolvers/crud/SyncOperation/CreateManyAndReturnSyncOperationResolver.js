"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnSyncOperationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnSyncOperationArgs_1 = require("./args/CreateManyAndReturnSyncOperationArgs");
const SyncOperation_1 = require("../../../models/SyncOperation");
const CreateManyAndReturnSyncOperation_1 = require("../../outputs/CreateManyAndReturnSyncOperation");
const helpers_1 = require("../../../helpers");
let CreateManyAndReturnSyncOperationResolver = class CreateManyAndReturnSyncOperationResolver {
    async createManyAndReturnSyncOperation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAndReturnSyncOperationResolver = CreateManyAndReturnSyncOperationResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnSyncOperation_1.CreateManyAndReturnSyncOperation], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnSyncOperationArgs_1.CreateManyAndReturnSyncOperationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAndReturnSyncOperationResolver.prototype, "createManyAndReturnSyncOperation", null);
exports.CreateManyAndReturnSyncOperationResolver = CreateManyAndReturnSyncOperationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncOperation_1.SyncOperation)
], CreateManyAndReturnSyncOperationResolver);
