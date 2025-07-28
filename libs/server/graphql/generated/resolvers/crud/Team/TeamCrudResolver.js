"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTeamArgs_1 = require("./args/AggregateTeamArgs");
const CreateManyAndReturnTeamArgs_1 = require("./args/CreateManyAndReturnTeamArgs");
const CreateManyTeamArgs_1 = require("./args/CreateManyTeamArgs");
const CreateOneTeamArgs_1 = require("./args/CreateOneTeamArgs");
const DeleteManyTeamArgs_1 = require("./args/DeleteManyTeamArgs");
const DeleteOneTeamArgs_1 = require("./args/DeleteOneTeamArgs");
const FindFirstTeamArgs_1 = require("./args/FindFirstTeamArgs");
const FindFirstTeamOrThrowArgs_1 = require("./args/FindFirstTeamOrThrowArgs");
const FindManyTeamArgs_1 = require("./args/FindManyTeamArgs");
const FindUniqueTeamArgs_1 = require("./args/FindUniqueTeamArgs");
const FindUniqueTeamOrThrowArgs_1 = require("./args/FindUniqueTeamOrThrowArgs");
const GroupByTeamArgs_1 = require("./args/GroupByTeamArgs");
const UpdateManyTeamArgs_1 = require("./args/UpdateManyTeamArgs");
const UpdateOneTeamArgs_1 = require("./args/UpdateOneTeamArgs");
const UpsertOneTeamArgs_1 = require("./args/UpsertOneTeamArgs");
const helpers_1 = require("../../../helpers");
const Team_1 = require("../../../models/Team");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTeam_1 = require("../../outputs/AggregateTeam");
const CreateManyAndReturnTeam_1 = require("../../outputs/CreateManyAndReturnTeam");
const TeamGroupBy_1 = require("../../outputs/TeamGroupBy");
let TeamCrudResolver = class TeamCrudResolver {
    async aggregateTeam(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).team.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTeamOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async teams(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async team(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByTeam(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.TeamCrudResolver = TeamCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTeam_1.AggregateTeam, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTeamArgs_1.AggregateTeamArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "aggregateTeam", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTeamArgs_1.CreateManyTeamArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "createManyTeam", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTeam_1.CreateManyAndReturnTeam], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnTeamArgs_1.CreateManyAndReturnTeamArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "createManyAndReturnTeam", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Team_1.Team, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTeamArgs_1.CreateOneTeamArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "createOneTeam", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTeamArgs_1.DeleteManyTeamArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "deleteManyTeam", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Team_1.Team, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTeamArgs_1.DeleteOneTeamArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "deleteOneTeam", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Team_1.Team, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTeamArgs_1.FindFirstTeamArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "findFirstTeam", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Team_1.Team, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTeamOrThrowArgs_1.FindFirstTeamOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "findFirstTeamOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Team_1.Team], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTeamArgs_1.FindManyTeamArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "teams", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Team_1.Team, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTeamArgs_1.FindUniqueTeamArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "team", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Team_1.Team, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTeamOrThrowArgs_1.FindUniqueTeamOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "getTeam", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TeamGroupBy_1.TeamGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTeamArgs_1.GroupByTeamArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "groupByTeam", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTeamArgs_1.UpdateManyTeamArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "updateManyTeam", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Team_1.Team, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTeamArgs_1.UpdateOneTeamArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "updateOneTeam", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Team_1.Team, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTeamArgs_1.UpsertOneTeamArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamCrudResolver.prototype, "upsertOneTeam", null);
exports.TeamCrudResolver = TeamCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Team_1.Team)
], TeamCrudResolver);
