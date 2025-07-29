"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTeamProjectArgs_1 = require("./args/AggregateTeamProjectArgs");
const CreateManyAndReturnTeamProjectArgs_1 = require("./args/CreateManyAndReturnTeamProjectArgs");
const CreateManyTeamProjectArgs_1 = require("./args/CreateManyTeamProjectArgs");
const CreateOneTeamProjectArgs_1 = require("./args/CreateOneTeamProjectArgs");
const DeleteManyTeamProjectArgs_1 = require("./args/DeleteManyTeamProjectArgs");
const DeleteOneTeamProjectArgs_1 = require("./args/DeleteOneTeamProjectArgs");
const FindFirstTeamProjectArgs_1 = require("./args/FindFirstTeamProjectArgs");
const FindFirstTeamProjectOrThrowArgs_1 = require("./args/FindFirstTeamProjectOrThrowArgs");
const FindManyTeamProjectArgs_1 = require("./args/FindManyTeamProjectArgs");
const FindUniqueTeamProjectArgs_1 = require("./args/FindUniqueTeamProjectArgs");
const FindUniqueTeamProjectOrThrowArgs_1 = require("./args/FindUniqueTeamProjectOrThrowArgs");
const GroupByTeamProjectArgs_1 = require("./args/GroupByTeamProjectArgs");
const UpdateManyTeamProjectArgs_1 = require("./args/UpdateManyTeamProjectArgs");
const UpdateOneTeamProjectArgs_1 = require("./args/UpdateOneTeamProjectArgs");
const UpsertOneTeamProjectArgs_1 = require("./args/UpsertOneTeamProjectArgs");
const helpers_1 = require("../../../helpers");
const TeamProject_1 = require("../../../models/TeamProject");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTeamProject_1 = require("../../outputs/AggregateTeamProject");
const CreateManyAndReturnTeamProject_1 = require("../../outputs/CreateManyAndReturnTeamProject");
const TeamProjectGroupBy_1 = require("../../outputs/TeamProjectGroupBy");
let TeamProjectCrudResolver = class TeamProjectCrudResolver {
    async aggregateTeamProject(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyTeamProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnTeamProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneTeamProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTeamProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneTeamProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTeamProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTeamProjectOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async teamProjects(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async teamProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getTeamProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByTeamProject(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTeamProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneTeamProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneTeamProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.TeamProjectCrudResolver = TeamProjectCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTeamProject_1.AggregateTeamProject, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTeamProjectArgs_1.AggregateTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamProjectCrudResolver.prototype, "aggregateTeamProject", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTeamProjectArgs_1.CreateManyTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamProjectCrudResolver.prototype, "createManyTeamProject", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTeamProject_1.CreateManyAndReturnTeamProject], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnTeamProjectArgs_1.CreateManyAndReturnTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamProjectCrudResolver.prototype, "createManyAndReturnTeamProject", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TeamProject_1.TeamProject, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTeamProjectArgs_1.CreateOneTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamProjectCrudResolver.prototype, "createOneTeamProject", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTeamProjectArgs_1.DeleteManyTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamProjectCrudResolver.prototype, "deleteManyTeamProject", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TeamProject_1.TeamProject, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTeamProjectArgs_1.DeleteOneTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamProjectCrudResolver.prototype, "deleteOneTeamProject", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TeamProject_1.TeamProject, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTeamProjectArgs_1.FindFirstTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamProjectCrudResolver.prototype, "findFirstTeamProject", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TeamProject_1.TeamProject, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTeamProjectOrThrowArgs_1.FindFirstTeamProjectOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamProjectCrudResolver.prototype, "findFirstTeamProjectOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TeamProject_1.TeamProject], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTeamProjectArgs_1.FindManyTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamProjectCrudResolver.prototype, "teamProjects", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TeamProject_1.TeamProject, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTeamProjectArgs_1.FindUniqueTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamProjectCrudResolver.prototype, "teamProject", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TeamProject_1.TeamProject, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTeamProjectOrThrowArgs_1.FindUniqueTeamProjectOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamProjectCrudResolver.prototype, "getTeamProject", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TeamProjectGroupBy_1.TeamProjectGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTeamProjectArgs_1.GroupByTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamProjectCrudResolver.prototype, "groupByTeamProject", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTeamProjectArgs_1.UpdateManyTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamProjectCrudResolver.prototype, "updateManyTeamProject", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TeamProject_1.TeamProject, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTeamProjectArgs_1.UpdateOneTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamProjectCrudResolver.prototype, "updateOneTeamProject", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TeamProject_1.TeamProject, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTeamProjectArgs_1.UpsertOneTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamProjectCrudResolver.prototype, "upsertOneTeamProject", null);
exports.TeamProjectCrudResolver = TeamProjectCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamProject_1.TeamProject)
], TeamProjectCrudResolver);
