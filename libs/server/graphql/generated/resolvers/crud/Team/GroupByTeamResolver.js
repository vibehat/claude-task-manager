"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTeamResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByTeamArgs_1 = require("./args/GroupByTeamArgs");
const Team_1 = require("../../../models/Team");
const TeamGroupBy_1 = require("../../outputs/TeamGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTeamResolver = class GroupByTeamResolver {
    async groupByTeam(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByTeamResolver = GroupByTeamResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TeamGroupBy_1.TeamGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTeamArgs_1.GroupByTeamArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTeamResolver.prototype, "groupByTeam", null);
exports.GroupByTeamResolver = GroupByTeamResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Team_1.Team)
], GroupByTeamResolver);
