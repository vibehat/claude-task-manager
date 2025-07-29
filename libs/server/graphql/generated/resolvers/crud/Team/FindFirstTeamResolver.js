"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTeamResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstTeamArgs_1 = require("./args/FindFirstTeamArgs");
const Team_1 = require("../../../models/Team");
const helpers_1 = require("../../../helpers");
let FindFirstTeamResolver = class FindFirstTeamResolver {
    async findFirstTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstTeamResolver = FindFirstTeamResolver;
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
], FindFirstTeamResolver.prototype, "findFirstTeam", null);
exports.FindFirstTeamResolver = FindFirstTeamResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Team_1.Team)
], FindFirstTeamResolver);
