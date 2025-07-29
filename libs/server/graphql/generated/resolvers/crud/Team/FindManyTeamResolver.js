"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTeamResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyTeamArgs_1 = require("./args/FindManyTeamArgs");
const Team_1 = require("../../../models/Team");
const helpers_1 = require("../../../helpers");
let FindManyTeamResolver = class FindManyTeamResolver {
    async teams(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyTeamResolver = FindManyTeamResolver;
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
], FindManyTeamResolver.prototype, "teams", null);
exports.FindManyTeamResolver = FindManyTeamResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Team_1.Team)
], FindManyTeamResolver);
