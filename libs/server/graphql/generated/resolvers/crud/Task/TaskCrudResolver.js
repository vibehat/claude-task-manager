"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTaskArgs_1 = require("./args/AggregateTaskArgs");
const CreateManyAndReturnTaskArgs_1 = require("./args/CreateManyAndReturnTaskArgs");
const CreateManyTaskArgs_1 = require("./args/CreateManyTaskArgs");
const CreateOneTaskArgs_1 = require("./args/CreateOneTaskArgs");
const DeleteManyTaskArgs_1 = require("./args/DeleteManyTaskArgs");
const DeleteOneTaskArgs_1 = require("./args/DeleteOneTaskArgs");
const FindFirstTaskArgs_1 = require("./args/FindFirstTaskArgs");
const FindFirstTaskOrThrowArgs_1 = require("./args/FindFirstTaskOrThrowArgs");
const FindManyTaskArgs_1 = require("./args/FindManyTaskArgs");
const FindUniqueTaskArgs_1 = require("./args/FindUniqueTaskArgs");
const FindUniqueTaskOrThrowArgs_1 = require("./args/FindUniqueTaskOrThrowArgs");
const GroupByTaskArgs_1 = require("./args/GroupByTaskArgs");
const UpdateManyTaskArgs_1 = require("./args/UpdateManyTaskArgs");
const UpdateOneTaskArgs_1 = require("./args/UpdateOneTaskArgs");
const UpsertOneTaskArgs_1 = require("./args/UpsertOneTaskArgs");
const helpers_1 = require("../../../helpers");
const Task_1 = require("../../../models/Task");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTask_1 = require("../../outputs/AggregateTask");
const CreateManyAndReturnTask_1 = require("../../outputs/CreateManyAndReturnTask");
const TaskGroupBy_1 = require("../../outputs/TaskGroupBy");
let TaskCrudResolver = class TaskCrudResolver {
    async aggregateTask(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).task.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyTask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnTask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneTask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneTask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTaskOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async tasks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async task(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getTask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByTask(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneTask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneTask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.TaskCrudResolver = TaskCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTask_1.AggregateTask, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTaskArgs_1.AggregateTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "aggregateTask", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTaskArgs_1.CreateManyTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "createManyTask", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTask_1.CreateManyAndReturnTask], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnTaskArgs_1.CreateManyAndReturnTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "createManyAndReturnTask", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Task_1.Task, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTaskArgs_1.CreateOneTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "createOneTask", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTaskArgs_1.DeleteManyTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "deleteManyTask", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Task_1.Task, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTaskArgs_1.DeleteOneTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "deleteOneTask", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Task_1.Task, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTaskArgs_1.FindFirstTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "findFirstTask", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Task_1.Task, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTaskOrThrowArgs_1.FindFirstTaskOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "findFirstTaskOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Task_1.Task], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTaskArgs_1.FindManyTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "tasks", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Task_1.Task, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTaskArgs_1.FindUniqueTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "task", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Task_1.Task, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTaskOrThrowArgs_1.FindUniqueTaskOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "getTask", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TaskGroupBy_1.TaskGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTaskArgs_1.GroupByTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "groupByTask", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTaskArgs_1.UpdateManyTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "updateManyTask", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Task_1.Task, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTaskArgs_1.UpdateOneTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "updateOneTask", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Task_1.Task, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTaskArgs_1.UpsertOneTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "upsertOneTask", null);
exports.TaskCrudResolver = TaskCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Task_1.Task)
], TaskCrudResolver);
