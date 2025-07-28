"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTeamMemberResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByTeamMemberArgs_1 = require("./args/GroupByTeamMemberArgs");
const TeamMember_1 = require("../../../models/TeamMember");
const TeamMemberGroupBy_1 = require("../../outputs/TeamMemberGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTeamMemberResolver = class GroupByTeamMemberResolver {
    async groupByTeamMember(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByTeamMemberResolver = GroupByTeamMemberResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TeamMemberGroupBy_1.TeamMemberGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTeamMemberArgs_1.GroupByTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTeamMemberResolver.prototype, "groupByTeamMember", null);
exports.GroupByTeamMemberResolver = GroupByTeamMemberResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamMember_1.TeamMember)
], GroupByTeamMemberResolver);
