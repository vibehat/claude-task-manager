"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByIssueStatusResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByIssueStatusArgs_1 = require("./args/GroupByIssueStatusArgs");
const IssueStatus_1 = require("../../../models/IssueStatus");
const IssueStatusGroupBy_1 = require("../../outputs/IssueStatusGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByIssueStatusResolver = class GroupByIssueStatusResolver {
    async groupByIssueStatus(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByIssueStatusResolver = GroupByIssueStatusResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [IssueStatusGroupBy_1.IssueStatusGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByIssueStatusArgs_1.GroupByIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByIssueStatusResolver.prototype, "groupByIssueStatus", null);
exports.GroupByIssueStatusResolver = GroupByIssueStatusResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueStatus_1.IssueStatus)
], GroupByIssueStatusResolver);
