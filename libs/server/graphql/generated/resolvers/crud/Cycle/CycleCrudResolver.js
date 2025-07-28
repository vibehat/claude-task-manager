"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCycleArgs_1 = require("./args/AggregateCycleArgs");
const CreateManyAndReturnCycleArgs_1 = require("./args/CreateManyAndReturnCycleArgs");
const CreateManyCycleArgs_1 = require("./args/CreateManyCycleArgs");
const CreateOneCycleArgs_1 = require("./args/CreateOneCycleArgs");
const DeleteManyCycleArgs_1 = require("./args/DeleteManyCycleArgs");
const DeleteOneCycleArgs_1 = require("./args/DeleteOneCycleArgs");
const FindFirstCycleArgs_1 = require("./args/FindFirstCycleArgs");
const FindFirstCycleOrThrowArgs_1 = require("./args/FindFirstCycleOrThrowArgs");
const FindManyCycleArgs_1 = require("./args/FindManyCycleArgs");
const FindUniqueCycleArgs_1 = require("./args/FindUniqueCycleArgs");
const FindUniqueCycleOrThrowArgs_1 = require("./args/FindUniqueCycleOrThrowArgs");
const GroupByCycleArgs_1 = require("./args/GroupByCycleArgs");
const UpdateManyCycleArgs_1 = require("./args/UpdateManyCycleArgs");
const UpdateOneCycleArgs_1 = require("./args/UpdateOneCycleArgs");
const UpsertOneCycleArgs_1 = require("./args/UpsertOneCycleArgs");
const helpers_1 = require("../../../helpers");
const Cycle_1 = require("../../../models/Cycle");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCycle_1 = require("../../outputs/AggregateCycle");
const CreateManyAndReturnCycle_1 = require("../../outputs/CreateManyAndReturnCycle");
const CycleGroupBy_1 = require("../../outputs/CycleGroupBy");
let CycleCrudResolver = class CycleCrudResolver {
    async aggregateCycle(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyCycle(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnCycle(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCycle(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCycle(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCycle(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCycle(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCycleOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async cycles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async cycle(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getCycle(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCycle(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCycle(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCycle(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCycle(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CycleCrudResolver = CycleCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCycle_1.AggregateCycle, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCycleArgs_1.AggregateCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CycleCrudResolver.prototype, "aggregateCycle", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCycleArgs_1.CreateManyCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CycleCrudResolver.prototype, "createManyCycle", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnCycle_1.CreateManyAndReturnCycle], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnCycleArgs_1.CreateManyAndReturnCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CycleCrudResolver.prototype, "createManyAndReturnCycle", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cycle_1.Cycle, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCycleArgs_1.CreateOneCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CycleCrudResolver.prototype, "createOneCycle", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCycleArgs_1.DeleteManyCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CycleCrudResolver.prototype, "deleteManyCycle", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cycle_1.Cycle, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCycleArgs_1.DeleteOneCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CycleCrudResolver.prototype, "deleteOneCycle", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cycle_1.Cycle, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCycleArgs_1.FindFirstCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CycleCrudResolver.prototype, "findFirstCycle", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cycle_1.Cycle, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCycleOrThrowArgs_1.FindFirstCycleOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CycleCrudResolver.prototype, "findFirstCycleOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Cycle_1.Cycle], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCycleArgs_1.FindManyCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CycleCrudResolver.prototype, "cycles", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cycle_1.Cycle, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCycleArgs_1.FindUniqueCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CycleCrudResolver.prototype, "cycle", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cycle_1.Cycle, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCycleOrThrowArgs_1.FindUniqueCycleOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CycleCrudResolver.prototype, "getCycle", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CycleGroupBy_1.CycleGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCycleArgs_1.GroupByCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CycleCrudResolver.prototype, "groupByCycle", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCycleArgs_1.UpdateManyCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CycleCrudResolver.prototype, "updateManyCycle", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cycle_1.Cycle, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCycleArgs_1.UpdateOneCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CycleCrudResolver.prototype, "updateOneCycle", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cycle_1.Cycle, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCycleArgs_1.UpsertOneCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CycleCrudResolver.prototype, "upsertOneCycle", null);
exports.CycleCrudResolver = CycleCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cycle_1.Cycle)
], CycleCrudResolver);
