"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTeamProjectResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstTeamProjectArgs_1 = require("./args/FindFirstTeamProjectArgs");
const TeamProject_1 = require("../../../models/TeamProject");
const helpers_1 = require("../../../helpers");
let FindFirstTeamProjectResolver = class FindFirstTeamProjectResolver {
    async findFirstTeamProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstTeamProjectResolver = FindFirstTeamProjectResolver;
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
], FindFirstTeamProjectResolver.prototype, "findFirstTeamProject", null);
exports.FindFirstTeamProjectResolver = FindFirstTeamProjectResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamProject_1.TeamProject)
], FindFirstTeamProjectResolver);
