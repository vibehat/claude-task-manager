"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateIssueArgs_1 = require("./args/AggregateIssueArgs");
const CreateManyAndReturnIssueArgs_1 = require("./args/CreateManyAndReturnIssueArgs");
const CreateManyIssueArgs_1 = require("./args/CreateManyIssueArgs");
const CreateOneIssueArgs_1 = require("./args/CreateOneIssueArgs");
const DeleteManyIssueArgs_1 = require("./args/DeleteManyIssueArgs");
const DeleteOneIssueArgs_1 = require("./args/DeleteOneIssueArgs");
const FindFirstIssueArgs_1 = require("./args/FindFirstIssueArgs");
const FindFirstIssueOrThrowArgs_1 = require("./args/FindFirstIssueOrThrowArgs");
const FindManyIssueArgs_1 = require("./args/FindManyIssueArgs");
const FindUniqueIssueArgs_1 = require("./args/FindUniqueIssueArgs");
const FindUniqueIssueOrThrowArgs_1 = require("./args/FindUniqueIssueOrThrowArgs");
const GroupByIssueArgs_1 = require("./args/GroupByIssueArgs");
const UpdateManyIssueArgs_1 = require("./args/UpdateManyIssueArgs");
const UpdateOneIssueArgs_1 = require("./args/UpdateOneIssueArgs");
const UpsertOneIssueArgs_1 = require("./args/UpsertOneIssueArgs");
const helpers_1 = require("../../../helpers");
const Issue_1 = require("../../../models/Issue");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateIssue_1 = require("../../outputs/AggregateIssue");
const CreateManyAndReturnIssue_1 = require("../../outputs/CreateManyAndReturnIssue");
const IssueGroupBy_1 = require("../../outputs/IssueGroupBy");
let IssueCrudResolver = class IssueCrudResolver {
    async aggregateIssue(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyIssue(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnIssue(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneIssue(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyIssue(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneIssue(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstIssue(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstIssueOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async issues(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async issue(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getIssue(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByIssue(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyIssue(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneIssue(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneIssue(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.IssueCrudResolver = IssueCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateIssue_1.AggregateIssue, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateIssueArgs_1.AggregateIssueArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueCrudResolver.prototype, "aggregateIssue", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyIssueArgs_1.CreateManyIssueArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueCrudResolver.prototype, "createManyIssue", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnIssue_1.CreateManyAndReturnIssue], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnIssueArgs_1.CreateManyAndReturnIssueArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueCrudResolver.prototype, "createManyAndReturnIssue", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Issue_1.Issue, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneIssueArgs_1.CreateOneIssueArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueCrudResolver.prototype, "createOneIssue", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyIssueArgs_1.DeleteManyIssueArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueCrudResolver.prototype, "deleteManyIssue", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Issue_1.Issue, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneIssueArgs_1.DeleteOneIssueArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueCrudResolver.prototype, "deleteOneIssue", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Issue_1.Issue, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstIssueArgs_1.FindFirstIssueArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueCrudResolver.prototype, "findFirstIssue", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Issue_1.Issue, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstIssueOrThrowArgs_1.FindFirstIssueOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueCrudResolver.prototype, "findFirstIssueOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Issue_1.Issue], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyIssueArgs_1.FindManyIssueArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueCrudResolver.prototype, "issues", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Issue_1.Issue, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueIssueArgs_1.FindUniqueIssueArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueCrudResolver.prototype, "issue", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Issue_1.Issue, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueIssueOrThrowArgs_1.FindUniqueIssueOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueCrudResolver.prototype, "getIssue", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [IssueGroupBy_1.IssueGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByIssueArgs_1.GroupByIssueArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueCrudResolver.prototype, "groupByIssue", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyIssueArgs_1.UpdateManyIssueArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueCrudResolver.prototype, "updateManyIssue", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Issue_1.Issue, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneIssueArgs_1.UpdateOneIssueArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueCrudResolver.prototype, "updateOneIssue", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Issue_1.Issue, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneIssueArgs_1.UpsertOneIssueArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueCrudResolver.prototype, "upsertOneIssue", null);
exports.IssueCrudResolver = IssueCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Issue_1.Issue)
], IssueCrudResolver);
