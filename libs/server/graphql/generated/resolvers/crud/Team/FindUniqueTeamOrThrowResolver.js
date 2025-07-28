"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTeamOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueTeamOrThrowArgs_1 = require("./args/FindUniqueTeamOrThrowArgs");
const Team_1 = require("../../../models/Team");
const helpers_1 = require("../../../helpers");
let FindUniqueTeamOrThrowResolver = class FindUniqueTeamOrThrowResolver {
    async getTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueTeamOrThrowResolver = FindUniqueTeamOrThrowResolver;
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
], FindUniqueTeamOrThrowResolver.prototype, "getTeam", null);
exports.FindUniqueTeamOrThrowResolver = FindUniqueTeamOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Team_1.Team)
], FindUniqueTeamOrThrowResolver);
