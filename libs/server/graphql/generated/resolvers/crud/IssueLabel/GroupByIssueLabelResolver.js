"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByIssueLabelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByIssueLabelArgs_1 = require("./args/GroupByIssueLabelArgs");
const IssueLabel_1 = require("../../../models/IssueLabel");
const IssueLabelGroupBy_1 = require("../../outputs/IssueLabelGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByIssueLabelResolver = class GroupByIssueLabelResolver {
    async groupByIssueLabel(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByIssueLabelResolver = GroupByIssueLabelResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [IssueLabelGroupBy_1.IssueLabelGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByIssueLabelArgs_1.GroupByIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByIssueLabelResolver.prototype, "groupByIssueLabel", null);
exports.GroupByIssueLabelResolver = GroupByIssueLabelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueLabel_1.IssueLabel)
], GroupByIssueLabelResolver);
