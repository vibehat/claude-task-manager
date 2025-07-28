"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateIssueLabelArgs_1 = require("./args/AggregateIssueLabelArgs");
const CreateManyAndReturnIssueLabelArgs_1 = require("./args/CreateManyAndReturnIssueLabelArgs");
const CreateManyIssueLabelArgs_1 = require("./args/CreateManyIssueLabelArgs");
const CreateOneIssueLabelArgs_1 = require("./args/CreateOneIssueLabelArgs");
const DeleteManyIssueLabelArgs_1 = require("./args/DeleteManyIssueLabelArgs");
const DeleteOneIssueLabelArgs_1 = require("./args/DeleteOneIssueLabelArgs");
const FindFirstIssueLabelArgs_1 = require("./args/FindFirstIssueLabelArgs");
const FindFirstIssueLabelOrThrowArgs_1 = require("./args/FindFirstIssueLabelOrThrowArgs");
const FindManyIssueLabelArgs_1 = require("./args/FindManyIssueLabelArgs");
const FindUniqueIssueLabelArgs_1 = require("./args/FindUniqueIssueLabelArgs");
const FindUniqueIssueLabelOrThrowArgs_1 = require("./args/FindUniqueIssueLabelOrThrowArgs");
const GroupByIssueLabelArgs_1 = require("./args/GroupByIssueLabelArgs");
const UpdateManyIssueLabelArgs_1 = require("./args/UpdateManyIssueLabelArgs");
const UpdateOneIssueLabelArgs_1 = require("./args/UpdateOneIssueLabelArgs");
const UpsertOneIssueLabelArgs_1 = require("./args/UpsertOneIssueLabelArgs");
const helpers_1 = require("../../../helpers");
const IssueLabel_1 = require("../../../models/IssueLabel");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateIssueLabel_1 = require("../../outputs/AggregateIssueLabel");
const CreateManyAndReturnIssueLabel_1 = require("../../outputs/CreateManyAndReturnIssueLabel");
const IssueLabelGroupBy_1 = require("../../outputs/IssueLabelGroupBy");
let IssueLabelCrudResolver = class IssueLabelCrudResolver {
    async aggregateIssueLabel(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyIssueLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnIssueLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneIssueLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyIssueLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneIssueLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstIssueLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstIssueLabelOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async issueLabels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async issueLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getIssueLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByIssueLabel(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyIssueLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneIssueLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneIssueLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.IssueLabelCrudResolver = IssueLabelCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateIssueLabel_1.AggregateIssueLabel, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateIssueLabelArgs_1.AggregateIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueLabelCrudResolver.prototype, "aggregateIssueLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyIssueLabelArgs_1.CreateManyIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueLabelCrudResolver.prototype, "createManyIssueLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnIssueLabel_1.CreateManyAndReturnIssueLabel], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnIssueLabelArgs_1.CreateManyAndReturnIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueLabelCrudResolver.prototype, "createManyAndReturnIssueLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IssueLabel_1.IssueLabel, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneIssueLabelArgs_1.CreateOneIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueLabelCrudResolver.prototype, "createOneIssueLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyIssueLabelArgs_1.DeleteManyIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueLabelCrudResolver.prototype, "deleteManyIssueLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IssueLabel_1.IssueLabel, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneIssueLabelArgs_1.DeleteOneIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueLabelCrudResolver.prototype, "deleteOneIssueLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => IssueLabel_1.IssueLabel, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstIssueLabelArgs_1.FindFirstIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueLabelCrudResolver.prototype, "findFirstIssueLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => IssueLabel_1.IssueLabel, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstIssueLabelOrThrowArgs_1.FindFirstIssueLabelOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueLabelCrudResolver.prototype, "findFirstIssueLabelOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [IssueLabel_1.IssueLabel], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyIssueLabelArgs_1.FindManyIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueLabelCrudResolver.prototype, "issueLabels", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => IssueLabel_1.IssueLabel, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueIssueLabelArgs_1.FindUniqueIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueLabelCrudResolver.prototype, "issueLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => IssueLabel_1.IssueLabel, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueIssueLabelOrThrowArgs_1.FindUniqueIssueLabelOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueLabelCrudResolver.prototype, "getIssueLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [IssueLabelGroupBy_1.IssueLabelGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByIssueLabelArgs_1.GroupByIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueLabelCrudResolver.prototype, "groupByIssueLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyIssueLabelArgs_1.UpdateManyIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueLabelCrudResolver.prototype, "updateManyIssueLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IssueLabel_1.IssueLabel, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneIssueLabelArgs_1.UpdateOneIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueLabelCrudResolver.prototype, "updateOneIssueLabel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IssueLabel_1.IssueLabel, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneIssueLabelArgs_1.UpsertOneIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueLabelCrudResolver.prototype, "upsertOneIssueLabel", null);
exports.IssueLabelCrudResolver = IssueLabelCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueLabel_1.IssueLabel)
], IssueLabelCrudResolver);
