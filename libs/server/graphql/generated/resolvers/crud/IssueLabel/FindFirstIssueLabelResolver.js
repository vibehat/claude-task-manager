"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstIssueLabelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstIssueLabelArgs_1 = require("./args/FindFirstIssueLabelArgs");
const IssueLabel_1 = require("../../../models/IssueLabel");
const helpers_1 = require("../../../helpers");
let FindFirstIssueLabelResolver = class FindFirstIssueLabelResolver {
    async findFirstIssueLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstIssueLabelResolver = FindFirstIssueLabelResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => IssueLabel_1.IssueLabel, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstIssueLabelArgs_1.FindFirstIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstIssueLabelResolver.prototype, "findFirstIssueLabel", null);
exports.FindFirstIssueLabelResolver = FindFirstIssueLabelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueLabel_1.IssueLabel)
], FindFirstIssueLabelResolver);
