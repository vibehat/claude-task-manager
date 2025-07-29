"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueStatusRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Issue_1 = require("../../../models/Issue");
const IssueStatus_1 = require("../../../models/IssueStatus");
const IssueStatusIssuesArgs_1 = require("./args/IssueStatusIssuesArgs");
const helpers_1 = require("../../../helpers");
let IssueStatusRelationsResolver = class IssueStatusRelationsResolver {
    async issues(issueStatus, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.findUniqueOrThrow({
            where: {
                id: issueStatus.id,
            },
        }).issues({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.IssueStatusRelationsResolver = IssueStatusRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Issue_1.Issue], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IssueStatus_1.IssueStatus, Object, Object, IssueStatusIssuesArgs_1.IssueStatusIssuesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueStatusRelationsResolver.prototype, "issues", null);
exports.IssueStatusRelationsResolver = IssueStatusRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueStatus_1.IssueStatus)
], IssueStatusRelationsResolver);
