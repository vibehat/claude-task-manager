"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncConflictCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateSyncConflictArgs_1 = require("./args/AggregateSyncConflictArgs");
const CreateManyAndReturnSyncConflictArgs_1 = require("./args/CreateManyAndReturnSyncConflictArgs");
const CreateManySyncConflictArgs_1 = require("./args/CreateManySyncConflictArgs");
const CreateOneSyncConflictArgs_1 = require("./args/CreateOneSyncConflictArgs");
const DeleteManySyncConflictArgs_1 = require("./args/DeleteManySyncConflictArgs");
const DeleteOneSyncConflictArgs_1 = require("./args/DeleteOneSyncConflictArgs");
const FindFirstSyncConflictArgs_1 = require("./args/FindFirstSyncConflictArgs");
const FindFirstSyncConflictOrThrowArgs_1 = require("./args/FindFirstSyncConflictOrThrowArgs");
const FindManySyncConflictArgs_1 = require("./args/FindManySyncConflictArgs");
const FindUniqueSyncConflictArgs_1 = require("./args/FindUniqueSyncConflictArgs");
const FindUniqueSyncConflictOrThrowArgs_1 = require("./args/FindUniqueSyncConflictOrThrowArgs");
const GroupBySyncConflictArgs_1 = require("./args/GroupBySyncConflictArgs");
const UpdateManySyncConflictArgs_1 = require("./args/UpdateManySyncConflictArgs");
const UpdateOneSyncConflictArgs_1 = require("./args/UpdateOneSyncConflictArgs");
const UpsertOneSyncConflictArgs_1 = require("./args/UpsertOneSyncConflictArgs");
const helpers_1 = require("../../../helpers");
const SyncConflict_1 = require("../../../models/SyncConflict");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSyncConflict_1 = require("../../outputs/AggregateSyncConflict");
const CreateManyAndReturnSyncConflict_1 = require("../../outputs/CreateManyAndReturnSyncConflict");
const SyncConflictGroupBy_1 = require("../../outputs/SyncConflictGroupBy");
let SyncConflictCrudResolver = class SyncConflictCrudResolver {
    async aggregateSyncConflict(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManySyncConflict(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnSyncConflict(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneSyncConflict(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySyncConflict(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneSyncConflict(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSyncConflict(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSyncConflictOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async syncConflicts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async syncConflict(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getSyncConflict(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupBySyncConflict(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManySyncConflict(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneSyncConflict(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneSyncConflict(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).syncConflict.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.SyncConflictCrudResolver = SyncConflictCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSyncConflict_1.AggregateSyncConflict, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSyncConflictArgs_1.AggregateSyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncConflictCrudResolver.prototype, "aggregateSyncConflict", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySyncConflictArgs_1.CreateManySyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncConflictCrudResolver.prototype, "createManySyncConflict", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnSyncConflict_1.CreateManyAndReturnSyncConflict], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnSyncConflictArgs_1.CreateManyAndReturnSyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncConflictCrudResolver.prototype, "createManyAndReturnSyncConflict", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SyncConflict_1.SyncConflict, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSyncConflictArgs_1.CreateOneSyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncConflictCrudResolver.prototype, "createOneSyncConflict", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySyncConflictArgs_1.DeleteManySyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncConflictCrudResolver.prototype, "deleteManySyncConflict", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SyncConflict_1.SyncConflict, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSyncConflictArgs_1.DeleteOneSyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncConflictCrudResolver.prototype, "deleteOneSyncConflict", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SyncConflict_1.SyncConflict, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSyncConflictArgs_1.FindFirstSyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncConflictCrudResolver.prototype, "findFirstSyncConflict", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SyncConflict_1.SyncConflict, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSyncConflictOrThrowArgs_1.FindFirstSyncConflictOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncConflictCrudResolver.prototype, "findFirstSyncConflictOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SyncConflict_1.SyncConflict], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySyncConflictArgs_1.FindManySyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncConflictCrudResolver.prototype, "syncConflicts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SyncConflict_1.SyncConflict, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSyncConflictArgs_1.FindUniqueSyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncConflictCrudResolver.prototype, "syncConflict", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SyncConflict_1.SyncConflict, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSyncConflictOrThrowArgs_1.FindUniqueSyncConflictOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncConflictCrudResolver.prototype, "getSyncConflict", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SyncConflictGroupBy_1.SyncConflictGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySyncConflictArgs_1.GroupBySyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncConflictCrudResolver.prototype, "groupBySyncConflict", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySyncConflictArgs_1.UpdateManySyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncConflictCrudResolver.prototype, "updateManySyncConflict", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SyncConflict_1.SyncConflict, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSyncConflictArgs_1.UpdateOneSyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncConflictCrudResolver.prototype, "updateOneSyncConflict", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SyncConflict_1.SyncConflict, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSyncConflictArgs_1.UpsertOneSyncConflictArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SyncConflictCrudResolver.prototype, "upsertOneSyncConflict", null);
exports.SyncConflictCrudResolver = SyncConflictCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SyncConflict_1.SyncConflict)
], SyncConflictCrudResolver);
