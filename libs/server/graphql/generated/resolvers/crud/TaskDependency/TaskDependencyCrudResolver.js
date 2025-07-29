"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTaskDependencyArgs_1 = require("./args/AggregateTaskDependencyArgs");
const CreateManyAndReturnTaskDependencyArgs_1 = require("./args/CreateManyAndReturnTaskDependencyArgs");
const CreateManyTaskDependencyArgs_1 = require("./args/CreateManyTaskDependencyArgs");
const CreateOneTaskDependencyArgs_1 = require("./args/CreateOneTaskDependencyArgs");
const DeleteManyTaskDependencyArgs_1 = require("./args/DeleteManyTaskDependencyArgs");
const DeleteOneTaskDependencyArgs_1 = require("./args/DeleteOneTaskDependencyArgs");
const FindFirstTaskDependencyArgs_1 = require("./args/FindFirstTaskDependencyArgs");
const FindFirstTaskDependencyOrThrowArgs_1 = require("./args/FindFirstTaskDependencyOrThrowArgs");
const FindManyTaskDependencyArgs_1 = require("./args/FindManyTaskDependencyArgs");
const FindUniqueTaskDependencyArgs_1 = require("./args/FindUniqueTaskDependencyArgs");
const FindUniqueTaskDependencyOrThrowArgs_1 = require("./args/FindUniqueTaskDependencyOrThrowArgs");
const GroupByTaskDependencyArgs_1 = require("./args/GroupByTaskDependencyArgs");
const UpdateManyTaskDependencyArgs_1 = require("./args/UpdateManyTaskDependencyArgs");
const UpdateOneTaskDependencyArgs_1 = require("./args/UpdateOneTaskDependencyArgs");
const UpsertOneTaskDependencyArgs_1 = require("./args/UpsertOneTaskDependencyArgs");
const helpers_1 = require("../../../helpers");
const TaskDependency_1 = require("../../../models/TaskDependency");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTaskDependency_1 = require("../../outputs/AggregateTaskDependency");
const CreateManyAndReturnTaskDependency_1 = require("../../outputs/CreateManyAndReturnTaskDependency");
const TaskDependencyGroupBy_1 = require("../../outputs/TaskDependencyGroupBy");
let TaskDependencyCrudResolver = class TaskDependencyCrudResolver {
    async aggregateTaskDependency(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyTaskDependency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnTaskDependency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneTaskDependency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTaskDependency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneTaskDependency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTaskDependency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTaskDependencyOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async taskDependencies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async taskDependency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getTaskDependency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByTaskDependency(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTaskDependency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneTaskDependency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneTaskDependency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.TaskDependencyCrudResolver = TaskDependencyCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTaskDependency_1.AggregateTaskDependency, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTaskDependencyArgs_1.AggregateTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDependencyCrudResolver.prototype, "aggregateTaskDependency", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTaskDependencyArgs_1.CreateManyTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDependencyCrudResolver.prototype, "createManyTaskDependency", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTaskDependency_1.CreateManyAndReturnTaskDependency], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnTaskDependencyArgs_1.CreateManyAndReturnTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDependencyCrudResolver.prototype, "createManyAndReturnTaskDependency", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TaskDependency_1.TaskDependency, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTaskDependencyArgs_1.CreateOneTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDependencyCrudResolver.prototype, "createOneTaskDependency", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTaskDependencyArgs_1.DeleteManyTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDependencyCrudResolver.prototype, "deleteManyTaskDependency", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TaskDependency_1.TaskDependency, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTaskDependencyArgs_1.DeleteOneTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDependencyCrudResolver.prototype, "deleteOneTaskDependency", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TaskDependency_1.TaskDependency, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTaskDependencyArgs_1.FindFirstTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDependencyCrudResolver.prototype, "findFirstTaskDependency", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TaskDependency_1.TaskDependency, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTaskDependencyOrThrowArgs_1.FindFirstTaskDependencyOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDependencyCrudResolver.prototype, "findFirstTaskDependencyOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TaskDependency_1.TaskDependency], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTaskDependencyArgs_1.FindManyTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDependencyCrudResolver.prototype, "taskDependencies", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TaskDependency_1.TaskDependency, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTaskDependencyArgs_1.FindUniqueTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDependencyCrudResolver.prototype, "taskDependency", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TaskDependency_1.TaskDependency, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTaskDependencyOrThrowArgs_1.FindUniqueTaskDependencyOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDependencyCrudResolver.prototype, "getTaskDependency", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TaskDependencyGroupBy_1.TaskDependencyGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTaskDependencyArgs_1.GroupByTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDependencyCrudResolver.prototype, "groupByTaskDependency", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTaskDependencyArgs_1.UpdateManyTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDependencyCrudResolver.prototype, "updateManyTaskDependency", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TaskDependency_1.TaskDependency, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTaskDependencyArgs_1.UpdateOneTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDependencyCrudResolver.prototype, "updateOneTaskDependency", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TaskDependency_1.TaskDependency, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTaskDependencyArgs_1.UpsertOneTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDependencyCrudResolver.prototype, "upsertOneTaskDependency", null);
exports.TaskDependencyCrudResolver = TaskDependencyCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskDependency_1.TaskDependency)
], TaskDependencyCrudResolver);
