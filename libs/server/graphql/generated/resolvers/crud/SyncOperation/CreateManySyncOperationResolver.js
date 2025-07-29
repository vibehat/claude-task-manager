"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySyncOperationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManySyncOperationArgs_1 = require("./args/CreateManySyncOperationArgs");
const SyncOperation_1 = require("../../../models/SyncOperation");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManySyncOperationResolver = class CreateManySyncOperationResolver {
    async createManySyncOperation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManySyncOperationResolver = CreateManySyncOperationResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySyncOperationArgs_1.CreateManySyncOperationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManySyncOperationResolver.prototype, "createManySyncOperation", null);
exports.CreateManySyncOperationResolver = CreateManySyncOperationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncOperation_1.SyncOperation)
], CreateManySyncOperationResolver);
