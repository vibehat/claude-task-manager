"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueStatusCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateIssueStatusArgs_1 = require("./args/AggregateIssueStatusArgs");
const CreateManyAndReturnIssueStatusArgs_1 = require("./args/CreateManyAndReturnIssueStatusArgs");
const CreateManyIssueStatusArgs_1 = require("./args/CreateManyIssueStatusArgs");
const CreateOneIssueStatusArgs_1 = require("./args/CreateOneIssueStatusArgs");
const DeleteManyIssueStatusArgs_1 = require("./args/DeleteManyIssueStatusArgs");
const DeleteOneIssueStatusArgs_1 = require("./args/DeleteOneIssueStatusArgs");
const FindFirstIssueStatusArgs_1 = require("./args/FindFirstIssueStatusArgs");
const FindFirstIssueStatusOrThrowArgs_1 = require("./args/FindFirstIssueStatusOrThrowArgs");
const FindManyIssueStatusArgs_1 = require("./args/FindManyIssueStatusArgs");
const FindUniqueIssueStatusArgs_1 = require("./args/FindUniqueIssueStatusArgs");
const FindUniqueIssueStatusOrThrowArgs_1 = require("./args/FindUniqueIssueStatusOrThrowArgs");
const GroupByIssueStatusArgs_1 = require("./args/GroupByIssueStatusArgs");
const UpdateManyIssueStatusArgs_1 = require("./args/UpdateManyIssueStatusArgs");
const UpdateOneIssueStatusArgs_1 = require("./args/UpdateOneIssueStatusArgs");
const UpsertOneIssueStatusArgs_1 = require("./args/UpsertOneIssueStatusArgs");
const helpers_1 = require("../../../helpers");
const IssueStatus_1 = require("../../../models/IssueStatus");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateIssueStatus_1 = require("../../outputs/AggregateIssueStatus");
const CreateManyAndReturnIssueStatus_1 = require("../../outputs/CreateManyAndReturnIssueStatus");
const IssueStatusGroupBy_1 = require("../../outputs/IssueStatusGroupBy");
let IssueStatusCrudResolver = class IssueStatusCrudResolver {
    async aggregateIssueStatus(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyIssueStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnIssueStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneIssueStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyIssueStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneIssueStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstIssueStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstIssueStatusOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async issueStatuses(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async issueStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getIssueStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByIssueStatus(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyIssueStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneIssueStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneIssueStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.IssueStatusCrudResolver = IssueStatusCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateIssueStatus_1.AggregateIssueStatus, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateIssueStatusArgs_1.AggregateIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueStatusCrudResolver.prototype, "aggregateIssueStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyIssueStatusArgs_1.CreateManyIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueStatusCrudResolver.prototype, "createManyIssueStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnIssueStatus_1.CreateManyAndReturnIssueStatus], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnIssueStatusArgs_1.CreateManyAndReturnIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueStatusCrudResolver.prototype, "createManyAndReturnIssueStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IssueStatus_1.IssueStatus, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneIssueStatusArgs_1.CreateOneIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueStatusCrudResolver.prototype, "createOneIssueStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyIssueStatusArgs_1.DeleteManyIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueStatusCrudResolver.prototype, "deleteManyIssueStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IssueStatus_1.IssueStatus, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneIssueStatusArgs_1.DeleteOneIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueStatusCrudResolver.prototype, "deleteOneIssueStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => IssueStatus_1.IssueStatus, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstIssueStatusArgs_1.FindFirstIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueStatusCrudResolver.prototype, "findFirstIssueStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => IssueStatus_1.IssueStatus, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstIssueStatusOrThrowArgs_1.FindFirstIssueStatusOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueStatusCrudResolver.prototype, "findFirstIssueStatusOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [IssueStatus_1.IssueStatus], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyIssueStatusArgs_1.FindManyIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueStatusCrudResolver.prototype, "issueStatuses", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => IssueStatus_1.IssueStatus, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueIssueStatusArgs_1.FindUniqueIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueStatusCrudResolver.prototype, "issueStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => IssueStatus_1.IssueStatus, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueIssueStatusOrThrowArgs_1.FindUniqueIssueStatusOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueStatusCrudResolver.prototype, "getIssueStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [IssueStatusGroupBy_1.IssueStatusGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByIssueStatusArgs_1.GroupByIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueStatusCrudResolver.prototype, "groupByIssueStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyIssueStatusArgs_1.UpdateManyIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueStatusCrudResolver.prototype, "updateManyIssueStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IssueStatus_1.IssueStatus, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneIssueStatusArgs_1.UpdateOneIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueStatusCrudResolver.prototype, "updateOneIssueStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IssueStatus_1.IssueStatus, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneIssueStatusArgs_1.UpsertOneIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueStatusCrudResolver.prototype, "upsertOneIssueStatus", null);
exports.IssueStatusCrudResolver = IssueStatusCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueStatus_1.IssueStatus)
], IssueStatusCrudResolver);
