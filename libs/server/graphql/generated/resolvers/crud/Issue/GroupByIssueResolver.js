"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByIssueResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByIssueArgs_1 = require("./args/GroupByIssueArgs");
const Issue_1 = require("../../../models/Issue");
const IssueGroupBy_1 = require("../../outputs/IssueGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByIssueResolver = class GroupByIssueResolver {
    async groupByIssue(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByIssueResolver = GroupByIssueResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [IssueGroupBy_1.IssueGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByIssueArgs_1.GroupByIssueArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByIssueResolver.prototype, "groupByIssue", null);
exports.GroupByIssueResolver = GroupByIssueResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Issue_1.Issue)
], GroupByIssueResolver);
