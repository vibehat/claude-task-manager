"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTeamProjectResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByTeamProjectArgs_1 = require("./args/GroupByTeamProjectArgs");
const TeamProject_1 = require("../../../models/TeamProject");
const TeamProjectGroupBy_1 = require("../../outputs/TeamProjectGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTeamProjectResolver = class GroupByTeamProjectResolver {
    async groupByTeamProject(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByTeamProjectResolver = GroupByTeamProjectResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TeamProjectGroupBy_1.TeamProjectGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTeamProjectArgs_1.GroupByTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTeamProjectResolver.prototype, "groupByTeamProject", null);
exports.GroupByTeamProjectResolver = GroupByTeamProjectResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamProject_1.TeamProject)
], GroupByTeamProjectResolver);
