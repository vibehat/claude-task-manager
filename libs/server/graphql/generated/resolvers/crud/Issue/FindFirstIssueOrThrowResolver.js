"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstIssueOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstIssueOrThrowArgs_1 = require("./args/FindFirstIssueOrThrowArgs");
const Issue_1 = require("../../../models/Issue");
const helpers_1 = require("../../../helpers");
let FindFirstIssueOrThrowResolver = class FindFirstIssueOrThrowResolver {
    async findFirstIssueOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstIssueOrThrowResolver = FindFirstIssueOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Issue_1.Issue, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstIssueOrThrowArgs_1.FindFirstIssueOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstIssueOrThrowResolver.prototype, "findFirstIssueOrThrow", null);
exports.FindFirstIssueOrThrowResolver = FindFirstIssueOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Issue_1.Issue)
], FindFirstIssueOrThrowResolver);
