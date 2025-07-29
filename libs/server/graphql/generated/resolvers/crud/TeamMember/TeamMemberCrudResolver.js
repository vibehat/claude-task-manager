"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTeamMemberArgs_1 = require("./args/AggregateTeamMemberArgs");
const CreateManyAndReturnTeamMemberArgs_1 = require("./args/CreateManyAndReturnTeamMemberArgs");
const CreateManyTeamMemberArgs_1 = require("./args/CreateManyTeamMemberArgs");
const CreateOneTeamMemberArgs_1 = require("./args/CreateOneTeamMemberArgs");
const DeleteManyTeamMemberArgs_1 = require("./args/DeleteManyTeamMemberArgs");
const DeleteOneTeamMemberArgs_1 = require("./args/DeleteOneTeamMemberArgs");
const FindFirstTeamMemberArgs_1 = require("./args/FindFirstTeamMemberArgs");
const FindFirstTeamMemberOrThrowArgs_1 = require("./args/FindFirstTeamMemberOrThrowArgs");
const FindManyTeamMemberArgs_1 = require("./args/FindManyTeamMemberArgs");
const FindUniqueTeamMemberArgs_1 = require("./args/FindUniqueTeamMemberArgs");
const FindUniqueTeamMemberOrThrowArgs_1 = require("./args/FindUniqueTeamMemberOrThrowArgs");
const GroupByTeamMemberArgs_1 = require("./args/GroupByTeamMemberArgs");
const UpdateManyTeamMemberArgs_1 = require("./args/UpdateManyTeamMemberArgs");
const UpdateOneTeamMemberArgs_1 = require("./args/UpdateOneTeamMemberArgs");
const UpsertOneTeamMemberArgs_1 = require("./args/UpsertOneTeamMemberArgs");
const helpers_1 = require("../../../helpers");
const TeamMember_1 = require("../../../models/TeamMember");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTeamMember_1 = require("../../outputs/AggregateTeamMember");
const CreateManyAndReturnTeamMember_1 = require("../../outputs/CreateManyAndReturnTeamMember");
const TeamMemberGroupBy_1 = require("../../outputs/TeamMemberGroupBy");
let TeamMemberCrudResolver = class TeamMemberCrudResolver {
    async aggregateTeamMember(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyTeamMember(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnTeamMember(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneTeamMember(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTeamMember(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneTeamMember(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTeamMember(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTeamMemberOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async teamMembers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async teamMember(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getTeamMember(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByTeamMember(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTeamMember(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneTeamMember(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneTeamMember(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.TeamMemberCrudResolver = TeamMemberCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTeamMember_1.AggregateTeamMember, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTeamMemberArgs_1.AggregateTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamMemberCrudResolver.prototype, "aggregateTeamMember", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTeamMemberArgs_1.CreateManyTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamMemberCrudResolver.prototype, "createManyTeamMember", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTeamMember_1.CreateManyAndReturnTeamMember], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnTeamMemberArgs_1.CreateManyAndReturnTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamMemberCrudResolver.prototype, "createManyAndReturnTeamMember", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TeamMember_1.TeamMember, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTeamMemberArgs_1.CreateOneTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamMemberCrudResolver.prototype, "createOneTeamMember", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTeamMemberArgs_1.DeleteManyTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamMemberCrudResolver.prototype, "deleteManyTeamMember", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TeamMember_1.TeamMember, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTeamMemberArgs_1.DeleteOneTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamMemberCrudResolver.prototype, "deleteOneTeamMember", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TeamMember_1.TeamMember, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTeamMemberArgs_1.FindFirstTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamMemberCrudResolver.prototype, "findFirstTeamMember", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TeamMember_1.TeamMember, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTeamMemberOrThrowArgs_1.FindFirstTeamMemberOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamMemberCrudResolver.prototype, "findFirstTeamMemberOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TeamMember_1.TeamMember], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTeamMemberArgs_1.FindManyTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamMemberCrudResolver.prototype, "teamMembers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TeamMember_1.TeamMember, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTeamMemberArgs_1.FindUniqueTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamMemberCrudResolver.prototype, "teamMember", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TeamMember_1.TeamMember, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTeamMemberOrThrowArgs_1.FindUniqueTeamMemberOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamMemberCrudResolver.prototype, "getTeamMember", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TeamMemberGroupBy_1.TeamMemberGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTeamMemberArgs_1.GroupByTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamMemberCrudResolver.prototype, "groupByTeamMember", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTeamMemberArgs_1.UpdateManyTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamMemberCrudResolver.prototype, "updateManyTeamMember", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TeamMember_1.TeamMember, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTeamMemberArgs_1.UpdateOneTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamMemberCrudResolver.prototype, "updateOneTeamMember", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TeamMember_1.TeamMember, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTeamMemberArgs_1.UpsertOneTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamMemberCrudResolver.prototype, "upsertOneTeamMember", null);
exports.TeamMemberCrudResolver = TeamMemberCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamMember_1.TeamMember)
], TeamMemberCrudResolver);
