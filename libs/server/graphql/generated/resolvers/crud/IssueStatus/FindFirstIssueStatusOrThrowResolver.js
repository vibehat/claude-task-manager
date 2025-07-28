"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstIssueStatusOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstIssueStatusOrThrowArgs_1 = require("./args/FindFirstIssueStatusOrThrowArgs");
const IssueStatus_1 = require("../../../models/IssueStatus");
const helpers_1 = require("../../../helpers");
let FindFirstIssueStatusOrThrowResolver = class FindFirstIssueStatusOrThrowResolver {
    async findFirstIssueStatusOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstIssueStatusOrThrowResolver = FindFirstIssueStatusOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => IssueStatus_1.IssueStatus, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstIssueStatusOrThrowArgs_1.FindFirstIssueStatusOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstIssueStatusOrThrowResolver.prototype, "findFirstIssueStatusOrThrow", null);
exports.FindFirstIssueStatusOrThrowResolver = FindFirstIssueStatusOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueStatus_1.IssueStatus)
], FindFirstIssueStatusOrThrowResolver);
