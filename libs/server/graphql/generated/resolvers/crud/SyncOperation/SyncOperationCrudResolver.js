"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncOperationCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateSyncOperationArgs_1 = require("./args/AggregateSyncOperationArgs");
const CreateManyAndReturnSyncOperationArgs_1 = require("./args/CreateManyAndReturnSyncOperationArgs");
const CreateManySyncOperationArgs_1 = require("./args/CreateManySyncOperationArgs");
const CreateOneSyncOperationArgs_1 = require("./args/CreateOneSyncOperationArgs");
const DeleteManySyncOperationArgs_1 = require("./args/DeleteManySyncOperationArgs");
const DeleteOneSyncOperationArgs_1 = require("./args/DeleteOneSyncOperationArgs");
const FindFirstSyncOperationArgs_1 = require("./args/FindFirstSyncOperationArgs");
const FindFirstSyncOperationOrThrowArgs_1 = require("./args/FindFirstSyncOperationOrThrowArgs");
const FindManySyncOperationArgs_1 = require("./args/FindManySyncOperationArgs");
const FindUniqueSyncOperationArgs_1 = require("./args/FindUniqueSyncOperationArgs");
const FindUniqueSyncOperationOrThrowArgs_1 = require("./args/FindUniqueSyncOperationOrThrowArgs");
const GroupBySyncOperationArgs_1 = require("./args/GroupBySyncOperationArgs");
const UpdateManySyncOperationArgs_1 = require("./args/UpdateManySyncOperationArgs");
const UpdateOneSyncOperationArgs_1 = require("./args/UpdateOneSyncOperationArgs");
const UpsertOneSyncOperationArgs_1 = require("./args/UpsertOneSyncOperationArgs");
const helpers_1 = require("../../../helpers");
const SyncOperation_1 = require("../../../models/SyncOperation");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSyncOperation_1 = require("../../outputs/AggregateSyncOperation");
const CreateManyAndReturnSyncOperation_1 = require("../../outputs/CreateManyAndReturnSyncOperation");
const SyncOperationGroupBy_1 = require("../../outputs/SyncOperationGroupBy");
let SyncOperationCrudResolver = class SyncOperationCrudResolver {
    async aggregateSyncOperation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManySyncOperation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnSyncOperation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneSyncOperation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySyncOperation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneSyncOperation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSyncOperation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSyncOperationOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async syncOperations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async syncOperation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getSyncOperation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupBySyncOperation(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManySyncOperation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneSyncOperation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneSyncOperation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncOperation.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.SyncOperationCrudResolver = SyncOperationCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSyncOperation_1.AggregateSyncOperation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSyncOperationArgs_1.AggregateSyncOperationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncOperationCrudResolver.prototype, "aggregateSyncOperation", null);
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
], SyncOperationCrudResolver.prototype, "createManySyncOperation", null);
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
], SyncOperationCrudResolver.prototype, "createManyAndReturnSyncOperation", null);
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
], SyncOperationCrudResolver.prototype, "createOneSyncOperation", null);
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
], SyncOperationCrudResolver.prototype, "deleteManySyncOperation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SyncOperation_1.SyncOperation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSyncOperationArgs_1.DeleteOneSyncOperationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncOperationCrudResolver.prototype, "deleteOneSyncOperation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SyncOperation_1.SyncOperation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSyncOperationArgs_1.FindFirstSyncOperationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncOperationCrudResolver.prototype, "findFirstSyncOperation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SyncOperation_1.SyncOperation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSyncOperationOrThrowArgs_1.FindFirstSyncOperationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncOperationCrudResolver.prototype, "findFirstSyncOperationOrThrow", null);
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
], SyncOperationCrudResolver.prototype, "syncOperations", null);
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
], SyncOperationCrudResolver.prototype, "syncOperation", null);
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
], SyncOperationCrudResolver.prototype, "getSyncOperation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SyncOperationGroupBy_1.SyncOperationGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySyncOperationArgs_1.GroupBySyncOperationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncOperationCrudResolver.prototype, "groupBySyncOperation", null);
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
], SyncOperationCrudResolver.prototype, "updateManySyncOperation", null);
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
], SyncOperationCrudResolver.prototype, "updateOneSyncOperation", null);
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
], SyncOperationCrudResolver.prototype, "upsertOneSyncOperation", null);
exports.SyncOperationCrudResolver = SyncOperationCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncOperation_1.SyncOperation)
], SyncOperationCrudResolver);
