"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMasterMetadataCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTaskMasterMetadataArgs_1 = require("./args/AggregateTaskMasterMetadataArgs");
const CreateManyAndReturnTaskMasterMetadataArgs_1 = require("./args/CreateManyAndReturnTaskMasterMetadataArgs");
const CreateManyTaskMasterMetadataArgs_1 = require("./args/CreateManyTaskMasterMetadataArgs");
const CreateOneTaskMasterMetadataArgs_1 = require("./args/CreateOneTaskMasterMetadataArgs");
const DeleteManyTaskMasterMetadataArgs_1 = require("./args/DeleteManyTaskMasterMetadataArgs");
const DeleteOneTaskMasterMetadataArgs_1 = require("./args/DeleteOneTaskMasterMetadataArgs");
const FindFirstTaskMasterMetadataArgs_1 = require("./args/FindFirstTaskMasterMetadataArgs");
const FindFirstTaskMasterMetadataOrThrowArgs_1 = require("./args/FindFirstTaskMasterMetadataOrThrowArgs");
const FindManyTaskMasterMetadataArgs_1 = require("./args/FindManyTaskMasterMetadataArgs");
const FindUniqueTaskMasterMetadataArgs_1 = require("./args/FindUniqueTaskMasterMetadataArgs");
const FindUniqueTaskMasterMetadataOrThrowArgs_1 = require("./args/FindUniqueTaskMasterMetadataOrThrowArgs");
const GroupByTaskMasterMetadataArgs_1 = require("./args/GroupByTaskMasterMetadataArgs");
const UpdateManyTaskMasterMetadataArgs_1 = require("./args/UpdateManyTaskMasterMetadataArgs");
const UpdateOneTaskMasterMetadataArgs_1 = require("./args/UpdateOneTaskMasterMetadataArgs");
const UpsertOneTaskMasterMetadataArgs_1 = require("./args/UpsertOneTaskMasterMetadataArgs");
const helpers_1 = require("../../../helpers");
const TaskMasterMetadata_1 = require("../../../models/TaskMasterMetadata");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTaskMasterMetadata_1 = require("../../outputs/AggregateTaskMasterMetadata");
const CreateManyAndReturnTaskMasterMetadata_1 = require("../../outputs/CreateManyAndReturnTaskMasterMetadata");
const TaskMasterMetadataGroupBy_1 = require("../../outputs/TaskMasterMetadataGroupBy");
let TaskMasterMetadataCrudResolver = class TaskMasterMetadataCrudResolver {
    async aggregateTaskMasterMetadata(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyTaskMasterMetadata(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnTaskMasterMetadata(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneTaskMasterMetadata(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTaskMasterMetadata(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneTaskMasterMetadata(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTaskMasterMetadata(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTaskMasterMetadataOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyTaskMasterMetadata(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueTaskMasterMetadata(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueTaskMasterMetadataOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByTaskMasterMetadata(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTaskMasterMetadata(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneTaskMasterMetadata(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneTaskMasterMetadata(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskMasterMetadata.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.TaskMasterMetadataCrudResolver = TaskMasterMetadataCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTaskMasterMetadata_1.AggregateTaskMasterMetadata, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTaskMasterMetadataArgs_1.AggregateTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskMasterMetadataCrudResolver.prototype, "aggregateTaskMasterMetadata", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTaskMasterMetadataArgs_1.CreateManyTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskMasterMetadataCrudResolver.prototype, "createManyTaskMasterMetadata", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTaskMasterMetadata_1.CreateManyAndReturnTaskMasterMetadata], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnTaskMasterMetadataArgs_1.CreateManyAndReturnTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskMasterMetadataCrudResolver.prototype, "createManyAndReturnTaskMasterMetadata", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TaskMasterMetadata_1.TaskMasterMetadata, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTaskMasterMetadataArgs_1.CreateOneTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskMasterMetadataCrudResolver.prototype, "createOneTaskMasterMetadata", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTaskMasterMetadataArgs_1.DeleteManyTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskMasterMetadataCrudResolver.prototype, "deleteManyTaskMasterMetadata", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TaskMasterMetadata_1.TaskMasterMetadata, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTaskMasterMetadataArgs_1.DeleteOneTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskMasterMetadataCrudResolver.prototype, "deleteOneTaskMasterMetadata", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TaskMasterMetadata_1.TaskMasterMetadata, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTaskMasterMetadataArgs_1.FindFirstTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskMasterMetadataCrudResolver.prototype, "findFirstTaskMasterMetadata", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TaskMasterMetadata_1.TaskMasterMetadata, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTaskMasterMetadataOrThrowArgs_1.FindFirstTaskMasterMetadataOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskMasterMetadataCrudResolver.prototype, "findFirstTaskMasterMetadataOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TaskMasterMetadata_1.TaskMasterMetadata], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTaskMasterMetadataArgs_1.FindManyTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskMasterMetadataCrudResolver.prototype, "findManyTaskMasterMetadata", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TaskMasterMetadata_1.TaskMasterMetadata, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTaskMasterMetadataArgs_1.FindUniqueTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskMasterMetadataCrudResolver.prototype, "findUniqueTaskMasterMetadata", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TaskMasterMetadata_1.TaskMasterMetadata, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTaskMasterMetadataOrThrowArgs_1.FindUniqueTaskMasterMetadataOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskMasterMetadataCrudResolver.prototype, "findUniqueTaskMasterMetadataOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TaskMasterMetadataGroupBy_1.TaskMasterMetadataGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTaskMasterMetadataArgs_1.GroupByTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskMasterMetadataCrudResolver.prototype, "groupByTaskMasterMetadata", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTaskMasterMetadataArgs_1.UpdateManyTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskMasterMetadataCrudResolver.prototype, "updateManyTaskMasterMetadata", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TaskMasterMetadata_1.TaskMasterMetadata, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTaskMasterMetadataArgs_1.UpdateOneTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskMasterMetadataCrudResolver.prototype, "updateOneTaskMasterMetadata", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TaskMasterMetadata_1.TaskMasterMetadata, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTaskMasterMetadataArgs_1.UpsertOneTaskMasterMetadataArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskMasterMetadataCrudResolver.prototype, "upsertOneTaskMasterMetadata", null);
exports.TaskMasterMetadataCrudResolver = TaskMasterMetadataCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskMasterMetadata_1.TaskMasterMetadata)
], TaskMasterMetadataCrudResolver);
