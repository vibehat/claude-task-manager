"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyIssueStatusResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyIssueStatusArgs_1 = require("./args/FindManyIssueStatusArgs");
const IssueStatus_1 = require("../../../models/IssueStatus");
const helpers_1 = require("../../../helpers");
let FindManyIssueStatusResolver = class FindManyIssueStatusResolver {
    async issueStatuses(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyIssueStatusResolver = FindManyIssueStatusResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [IssueStatus_1.IssueStatus], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyIssueStatusArgs_1.FindManyIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyIssueStatusResolver.prototype, "issueStatuses", null);
exports.FindManyIssueStatusResolver = FindManyIssueStatusResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueStatus_1.IssueStatus)
], FindManyIssueStatusResolver);
