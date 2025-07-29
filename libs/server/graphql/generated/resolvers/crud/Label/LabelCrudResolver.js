"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateLabelArgs_1 = require("./args/AggregateLabelArgs");
const CreateManyAndReturnLabelArgs_1 = require("./args/CreateManyAndReturnLabelArgs");
const CreateManyLabelArgs_1 = require("./args/CreateManyLabelArgs");
const CreateOneLabelArgs_1 = require("./args/CreateOneLabelArgs");
const DeleteManyLabelArgs_1 = require("./args/DeleteManyLabelArgs");
const DeleteOneLabelArgs_1 = require("./args/DeleteOneLabelArgs");
const FindFirstLabelArgs_1 = require("./args/FindFirstLabelArgs");
const FindFirstLabelOrThrowArgs_1 = require("./args/FindFirstLabelOrThrowArgs");
const FindManyLabelArgs_1 = require("./args/FindManyLabelArgs");
const FindUniqueLabelArgs_1 = require("./args/FindUniqueLabelArgs");
const FindUniqueLabelOrThrowArgs_1 = require("./args/FindUniqueLabelOrThrowArgs");
const GroupByLabelArgs_1 = require("./args/GroupByLabelArgs");
const UpdateManyLabelArgs_1 = require("./args/UpdateManyLabelArgs");
const UpdateOneLabelArgs_1 = require("./args/UpdateOneLabelArgs");
const UpsertOneLabelArgs_1 = require("./args/UpsertOneLabelArgs");
const helpers_1 = require("../../../helpers");
const Label_1 = require("../../../models/Label");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateLabel_1 = require("../../outputs/AggregateLabel");
const CreateManyAndReturnLabel_1 = require("../../outputs/CreateManyAndReturnLabel");
const LabelGroupBy_1 = require("../../outputs/LabelGroupBy");
let LabelCrudResolver = class LabelCrudResolver {
    async aggregateLabel(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).label.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).label.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).label.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).label.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).label.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).label.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).label.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstLabelOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).label.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async labels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).label.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async label(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).label.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).label.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByLabel(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).label.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).label.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).label.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).label.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.LabelCrudResolver = LabelCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateLabel_1.AggregateLabel, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateLabelArgs_1.AggregateLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LabelCrudResolver.prototype, "aggregateLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyLabelArgs_1.CreateManyLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LabelCrudResolver.prototype, "createManyLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnLabel_1.CreateManyAndReturnLabel], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnLabelArgs_1.CreateManyAndReturnLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LabelCrudResolver.prototype, "createManyAndReturnLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Label_1.Label, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneLabelArgs_1.CreateOneLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LabelCrudResolver.prototype, "createOneLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyLabelArgs_1.DeleteManyLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LabelCrudResolver.prototype, "deleteManyLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Label_1.Label, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneLabelArgs_1.DeleteOneLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LabelCrudResolver.prototype, "deleteOneLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Label_1.Label, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstLabelArgs_1.FindFirstLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LabelCrudResolver.prototype, "findFirstLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Label_1.Label, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstLabelOrThrowArgs_1.FindFirstLabelOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LabelCrudResolver.prototype, "findFirstLabelOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Label_1.Label], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyLabelArgs_1.FindManyLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LabelCrudResolver.prototype, "labels", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Label_1.Label, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueLabelArgs_1.FindUniqueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LabelCrudResolver.prototype, "label", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Label_1.Label, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueLabelOrThrowArgs_1.FindUniqueLabelOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LabelCrudResolver.prototype, "getLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [LabelGroupBy_1.LabelGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByLabelArgs_1.GroupByLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LabelCrudResolver.prototype, "groupByLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyLabelArgs_1.UpdateManyLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LabelCrudResolver.prototype, "updateManyLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Label_1.Label, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneLabelArgs_1.UpdateOneLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LabelCrudResolver.prototype, "updateOneLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Label_1.Label, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneLabelArgs_1.UpsertOneLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LabelCrudResolver.prototype, "upsertOneLabel", null);
exports.LabelCrudResolver = LabelCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Label_1.Label)
], LabelCrudResolver);
