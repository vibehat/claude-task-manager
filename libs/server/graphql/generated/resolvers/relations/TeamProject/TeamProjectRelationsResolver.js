"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Project_1 = require("../../../models/Project");
const Team_1 = require("../../../models/Team");
const TeamProject_1 = require("../../../models/TeamProject");
const helpers_1 = require("../../../helpers");
let TeamProjectRelationsResolver = class TeamProjectRelationsResolver {
    async team(teamProject, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.findUniqueOrThrow({
            where: {
                id: teamProject.id,
            },
        }).team({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async project(teamProject, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.findUniqueOrThrow({
            where: {
                id: teamProject.id,
            },
        }).project({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.TeamProjectRelationsResolver = TeamProjectRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Team_1.Team, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TeamProject_1.TeamProject, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamProjectRelationsResolver.prototype, "team", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Project_1.Project, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TeamProject_1.TeamProject, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamProjectRelationsResolver.prototype, "project", null);
exports.TeamProjectRelationsResolver = TeamProjectRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamProject_1.TeamProject)
], TeamProjectRelationsResolver);
