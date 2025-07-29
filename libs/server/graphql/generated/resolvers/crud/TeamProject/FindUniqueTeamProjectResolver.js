"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTeamProjectResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueTeamProjectArgs_1 = require("./args/FindUniqueTeamProjectArgs");
const TeamProject_1 = require("../../../models/TeamProject");
const helpers_1 = require("../../../helpers");
let FindUniqueTeamProjectResolver = class FindUniqueTeamProjectResolver {
    async teamProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueTeamProjectResolver = FindUniqueTeamProjectResolver;
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
], FindUniqueTeamProjectResolver.prototype, "teamProject", null);
exports.FindUniqueTeamProjectResolver = FindUniqueTeamProjectResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamProject_1.TeamProject)
], FindUniqueTeamProjectResolver);
