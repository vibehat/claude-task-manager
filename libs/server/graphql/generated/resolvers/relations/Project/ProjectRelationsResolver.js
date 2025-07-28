"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Issue_1 = require("../../../models/Issue");
const Project_1 = require("../../../models/Project");
const TeamProject_1 = require("../../../models/TeamProject");
const User_1 = require("../../../models/User");
const ProjectIssuesArgs_1 = require("./args/ProjectIssuesArgs");
const ProjectLeadArgs_1 = require("./args/ProjectLeadArgs");
const ProjectTeamsArgs_1 = require("./args/ProjectTeamsArgs");
const helpers_1 = require("../../../helpers");
let ProjectRelationsResolver = class ProjectRelationsResolver {
    async issues(project, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.findUniqueOrThrow({
            where: {
                id: project.id,
            },
        }).issues({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async lead(project, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.findUniqueOrThrow({
            where: {
                id: project.id,
            },
        }).lead({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async teams(project, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.findUniqueOrThrow({
            where: {
                id: project.id,
            },
        }).teams({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.ProjectRelationsResolver = ProjectRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Issue_1.Issue], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Project_1.Project, Object, Object, ProjectIssuesArgs_1.ProjectIssuesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectRelationsResolver.prototype, "issues", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Project_1.Project, Object, Object, ProjectLeadArgs_1.ProjectLeadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectRelationsResolver.prototype, "lead", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [TeamProject_1.TeamProject], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Project_1.Project, Object, Object, ProjectTeamsArgs_1.ProjectTeamsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectRelationsResolver.prototype, "teams", null);
exports.ProjectRelationsResolver = ProjectRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_1.Project)
], ProjectRelationsResolver);
