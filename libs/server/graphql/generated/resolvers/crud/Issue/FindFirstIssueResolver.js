"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstIssueResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstIssueArgs_1 = require("./args/FindFirstIssueArgs");
const Issue_1 = require("../../../models/Issue");
const helpers_1 = require("../../../helpers");
let FindFirstIssueResolver = class FindFirstIssueResolver {
    async findFirstIssue(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstIssueResolver = FindFirstIssueResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Issue_1.Issue, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstIssueArgs_1.FindFirstIssueArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstIssueResolver.prototype, "findFirstIssue", null);
exports.FindFirstIssueResolver = FindFirstIssueResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Issue_1.Issue)
], FindFirstIssueResolver);
