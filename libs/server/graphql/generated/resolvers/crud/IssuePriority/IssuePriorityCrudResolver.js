"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateIssuePriorityArgs_1 = require("./args/AggregateIssuePriorityArgs");
const CreateManyAndReturnIssuePriorityArgs_1 = require("./args/CreateManyAndReturnIssuePriorityArgs");
const CreateManyIssuePriorityArgs_1 = require("./args/CreateManyIssuePriorityArgs");
const CreateOneIssuePriorityArgs_1 = require("./args/CreateOneIssuePriorityArgs");
const DeleteManyIssuePriorityArgs_1 = require("./args/DeleteManyIssuePriorityArgs");
const DeleteOneIssuePriorityArgs_1 = require("./args/DeleteOneIssuePriorityArgs");
const FindFirstIssuePriorityArgs_1 = require("./args/FindFirstIssuePriorityArgs");
const FindFirstIssuePriorityOrThrowArgs_1 = require("./args/FindFirstIssuePriorityOrThrowArgs");
const FindManyIssuePriorityArgs_1 = require("./args/FindManyIssuePriorityArgs");
const FindUniqueIssuePriorityArgs_1 = require("./args/FindUniqueIssuePriorityArgs");
const FindUniqueIssuePriorityOrThrowArgs_1 = require("./args/FindUniqueIssuePriorityOrThrowArgs");
const GroupByIssuePriorityArgs_1 = require("./args/GroupByIssuePriorityArgs");
const UpdateManyIssuePriorityArgs_1 = require("./args/UpdateManyIssuePriorityArgs");
const UpdateOneIssuePriorityArgs_1 = require("./args/UpdateOneIssuePriorityArgs");
const UpsertOneIssuePriorityArgs_1 = require("./args/UpsertOneIssuePriorityArgs");
const helpers_1 = require("../../../helpers");
const IssuePriority_1 = require("../../../models/IssuePriority");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateIssuePriority_1 = require("../../outputs/AggregateIssuePriority");
const CreateManyAndReturnIssuePriority_1 = require("../../outputs/CreateManyAndReturnIssuePriority");
const IssuePriorityGroupBy_1 = require("../../outputs/IssuePriorityGroupBy");
let IssuePriorityCrudResolver = class IssuePriorityCrudResolver {
    async aggregateIssuePriority(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyIssuePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnIssuePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneIssuePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyIssuePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneIssuePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstIssuePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstIssuePriorityOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async issuePriorities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async issuePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getIssuePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByIssuePriority(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyIssuePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneIssuePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneIssuePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.IssuePriorityCrudResolver = IssuePriorityCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateIssuePriority_1.AggregateIssuePriority, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateIssuePriorityArgs_1.AggregateIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssuePriorityCrudResolver.prototype, "aggregateIssuePriority", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyIssuePriorityArgs_1.CreateManyIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssuePriorityCrudResolver.prototype, "createManyIssuePriority", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnIssuePriority_1.CreateManyAndReturnIssuePriority], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnIssuePriorityArgs_1.CreateManyAndReturnIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssuePriorityCrudResolver.prototype, "createManyAndReturnIssuePriority", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IssuePriority_1.IssuePriority, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneIssuePriorityArgs_1.CreateOneIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssuePriorityCrudResolver.prototype, "createOneIssuePriority", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyIssuePriorityArgs_1.DeleteManyIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssuePriorityCrudResolver.prototype, "deleteManyIssuePriority", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IssuePriority_1.IssuePriority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneIssuePriorityArgs_1.DeleteOneIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssuePriorityCrudResolver.prototype, "deleteOneIssuePriority", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => IssuePriority_1.IssuePriority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstIssuePriorityArgs_1.FindFirstIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssuePriorityCrudResolver.prototype, "findFirstIssuePriority", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => IssuePriority_1.IssuePriority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstIssuePriorityOrThrowArgs_1.FindFirstIssuePriorityOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssuePriorityCrudResolver.prototype, "findFirstIssuePriorityOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [IssuePriority_1.IssuePriority], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyIssuePriorityArgs_1.FindManyIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssuePriorityCrudResolver.prototype, "issuePriorities", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => IssuePriority_1.IssuePriority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueIssuePriorityArgs_1.FindUniqueIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssuePriorityCrudResolver.prototype, "issuePriority", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => IssuePriority_1.IssuePriority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueIssuePriorityOrThrowArgs_1.FindUniqueIssuePriorityOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssuePriorityCrudResolver.prototype, "getIssuePriority", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [IssuePriorityGroupBy_1.IssuePriorityGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByIssuePriorityArgs_1.GroupByIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssuePriorityCrudResolver.prototype, "groupByIssuePriority", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyIssuePriorityArgs_1.UpdateManyIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssuePriorityCrudResolver.prototype, "updateManyIssuePriority", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IssuePriority_1.IssuePriority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneIssuePriorityArgs_1.UpdateOneIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssuePriorityCrudResolver.prototype, "updateOneIssuePriority", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IssuePriority_1.IssuePriority, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneIssuePriorityArgs_1.UpsertOneIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssuePriorityCrudResolver.prototype, "upsertOneIssuePriority", null);
exports.IssuePriorityCrudResolver = IssuePriorityCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssuePriority_1.IssuePriority)
], IssuePriorityCrudResolver);
