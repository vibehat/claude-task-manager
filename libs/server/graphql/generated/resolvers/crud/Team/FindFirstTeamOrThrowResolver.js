"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTeamOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstTeamOrThrowArgs_1 = require("./args/FindFirstTeamOrThrowArgs");
const Team_1 = require("../../../models/Team");
const helpers_1 = require("../../../helpers");
let FindFirstTeamOrThrowResolver = class FindFirstTeamOrThrowResolver {
    async findFirstTeamOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstTeamOrThrowResolver = FindFirstTeamOrThrowResolver;
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
], FindFirstTeamOrThrowResolver.prototype, "findFirstTeamOrThrow", null);
exports.FindFirstTeamOrThrowResolver = FindFirstTeamOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Team_1.Team)
], FindFirstTeamOrThrowResolver);
