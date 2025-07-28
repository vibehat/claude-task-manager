"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateProjectArgs_1 = require("./args/AggregateProjectArgs");
const CreateManyAndReturnProjectArgs_1 = require("./args/CreateManyAndReturnProjectArgs");
const CreateManyProjectArgs_1 = require("./args/CreateManyProjectArgs");
const CreateOneProjectArgs_1 = require("./args/CreateOneProjectArgs");
const DeleteManyProjectArgs_1 = require("./args/DeleteManyProjectArgs");
const DeleteOneProjectArgs_1 = require("./args/DeleteOneProjectArgs");
const FindFirstProjectArgs_1 = require("./args/FindFirstProjectArgs");
const FindFirstProjectOrThrowArgs_1 = require("./args/FindFirstProjectOrThrowArgs");
const FindManyProjectArgs_1 = require("./args/FindManyProjectArgs");
const FindUniqueProjectArgs_1 = require("./args/FindUniqueProjectArgs");
const FindUniqueProjectOrThrowArgs_1 = require("./args/FindUniqueProjectOrThrowArgs");
const GroupByProjectArgs_1 = require("./args/GroupByProjectArgs");
const UpdateManyProjectArgs_1 = require("./args/UpdateManyProjectArgs");
const UpdateOneProjectArgs_1 = require("./args/UpdateOneProjectArgs");
const UpsertOneProjectArgs_1 = require("./args/UpsertOneProjectArgs");
const helpers_1 = require("../../../helpers");
const Project_1 = require("../../../models/Project");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProject_1 = require("../../outputs/AggregateProject");
const CreateManyAndReturnProject_1 = require("../../outputs/CreateManyAndReturnProject");
const ProjectGroupBy_1 = require("../../outputs/ProjectGroupBy");
let ProjectCrudResolver = class ProjectCrudResolver {
    async aggregateProject(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).project.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProjectOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async projects(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async project(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByProject(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.ProjectCrudResolver = ProjectCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateProject_1.AggregateProject, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateProjectArgs_1.AggregateProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectCrudResolver.prototype, "aggregateProject", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyProjectArgs_1.CreateManyProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectCrudResolver.prototype, "createManyProject", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnProject_1.CreateManyAndReturnProject], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnProjectArgs_1.CreateManyAndReturnProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectCrudResolver.prototype, "createManyAndReturnProject", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Project_1.Project, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneProjectArgs_1.CreateOneProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectCrudResolver.prototype, "createOneProject", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyProjectArgs_1.DeleteManyProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectCrudResolver.prototype, "deleteManyProject", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Project_1.Project, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneProjectArgs_1.DeleteOneProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectCrudResolver.prototype, "deleteOneProject", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Project_1.Project, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProjectArgs_1.FindFirstProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectCrudResolver.prototype, "findFirstProject", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Project_1.Project, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProjectOrThrowArgs_1.FindFirstProjectOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectCrudResolver.prototype, "findFirstProjectOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Project_1.Project], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyProjectArgs_1.FindManyProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectCrudResolver.prototype, "projects", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Project_1.Project, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProjectArgs_1.FindUniqueProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectCrudResolver.prototype, "project", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Project_1.Project, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProjectOrThrowArgs_1.FindUniqueProjectOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectCrudResolver.prototype, "getProject", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ProjectGroupBy_1.ProjectGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProjectArgs_1.GroupByProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectCrudResolver.prototype, "groupByProject", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyProjectArgs_1.UpdateManyProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectCrudResolver.prototype, "updateManyProject", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Project_1.Project, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneProjectArgs_1.UpdateOneProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectCrudResolver.prototype, "updateOneProject", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Project_1.Project, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneProjectArgs_1.UpsertOneProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectCrudResolver.prototype, "upsertOneProject", null);
exports.ProjectCrudResolver = ProjectCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_1.Project)
], ProjectCrudResolver);
