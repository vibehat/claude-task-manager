"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateSubtaskArgs_1 = require("./args/AggregateSubtaskArgs");
const CreateManyAndReturnSubtaskArgs_1 = require("./args/CreateManyAndReturnSubtaskArgs");
const CreateManySubtaskArgs_1 = require("./args/CreateManySubtaskArgs");
const CreateOneSubtaskArgs_1 = require("./args/CreateOneSubtaskArgs");
const DeleteManySubtaskArgs_1 = require("./args/DeleteManySubtaskArgs");
const DeleteOneSubtaskArgs_1 = require("./args/DeleteOneSubtaskArgs");
const FindFirstSubtaskArgs_1 = require("./args/FindFirstSubtaskArgs");
const FindFirstSubtaskOrThrowArgs_1 = require("./args/FindFirstSubtaskOrThrowArgs");
const FindManySubtaskArgs_1 = require("./args/FindManySubtaskArgs");
const FindUniqueSubtaskArgs_1 = require("./args/FindUniqueSubtaskArgs");
const FindUniqueSubtaskOrThrowArgs_1 = require("./args/FindUniqueSubtaskOrThrowArgs");
const GroupBySubtaskArgs_1 = require("./args/GroupBySubtaskArgs");
const UpdateManySubtaskArgs_1 = require("./args/UpdateManySubtaskArgs");
const UpdateOneSubtaskArgs_1 = require("./args/UpdateOneSubtaskArgs");
const UpsertOneSubtaskArgs_1 = require("./args/UpsertOneSubtaskArgs");
const helpers_1 = require("../../../helpers");
const Subtask_1 = require("../../../models/Subtask");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSubtask_1 = require("../../outputs/AggregateSubtask");
const CreateManyAndReturnSubtask_1 = require("../../outputs/CreateManyAndReturnSubtask");
const SubtaskGroupBy_1 = require("../../outputs/SubtaskGroupBy");
let SubtaskCrudResolver = class SubtaskCrudResolver {
    async aggregateSubtask(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManySubtask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnSubtask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneSubtask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySubtask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneSubtask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSubtask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSubtaskOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async subtasks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async subtask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getSubtask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupBySubtask(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManySubtask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneSubtask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneSubtask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.SubtaskCrudResolver = SubtaskCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSubtask_1.AggregateSubtask, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSubtaskArgs_1.AggregateSubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubtaskCrudResolver.prototype, "aggregateSubtask", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySubtaskArgs_1.CreateManySubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubtaskCrudResolver.prototype, "createManySubtask", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnSubtask_1.CreateManyAndReturnSubtask], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnSubtaskArgs_1.CreateManyAndReturnSubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubtaskCrudResolver.prototype, "createManyAndReturnSubtask", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Subtask_1.Subtask, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSubtaskArgs_1.CreateOneSubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubtaskCrudResolver.prototype, "createOneSubtask", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySubtaskArgs_1.DeleteManySubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubtaskCrudResolver.prototype, "deleteManySubtask", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Subtask_1.Subtask, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSubtaskArgs_1.DeleteOneSubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubtaskCrudResolver.prototype, "deleteOneSubtask", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Subtask_1.Subtask, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSubtaskArgs_1.FindFirstSubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubtaskCrudResolver.prototype, "findFirstSubtask", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Subtask_1.Subtask, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSubtaskOrThrowArgs_1.FindFirstSubtaskOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubtaskCrudResolver.prototype, "findFirstSubtaskOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Subtask_1.Subtask], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySubtaskArgs_1.FindManySubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubtaskCrudResolver.prototype, "subtasks", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Subtask_1.Subtask, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSubtaskArgs_1.FindUniqueSubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubtaskCrudResolver.prototype, "subtask", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Subtask_1.Subtask, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSubtaskOrThrowArgs_1.FindUniqueSubtaskOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubtaskCrudResolver.prototype, "getSubtask", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SubtaskGroupBy_1.SubtaskGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySubtaskArgs_1.GroupBySubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubtaskCrudResolver.prototype, "groupBySubtask", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySubtaskArgs_1.UpdateManySubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubtaskCrudResolver.prototype, "updateManySubtask", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Subtask_1.Subtask, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSubtaskArgs_1.UpdateOneSubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubtaskCrudResolver.prototype, "updateOneSubtask", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Subtask_1.Subtask, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSubtaskArgs_1.UpsertOneSubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubtaskCrudResolver.prototype, "upsertOneSubtask", null);
exports.SubtaskCrudResolver = SubtaskCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Subtask_1.Subtask)
], SubtaskCrudResolver);
