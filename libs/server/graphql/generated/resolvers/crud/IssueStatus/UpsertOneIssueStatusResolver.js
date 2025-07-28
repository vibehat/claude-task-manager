"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneIssueStatusResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneIssueStatusArgs_1 = require("./args/UpsertOneIssueStatusArgs");
const IssueStatus_1 = require("../../../models/IssueStatus");
const helpers_1 = require("../../../helpers");
let UpsertOneIssueStatusResolver = class UpsertOneIssueStatusResolver {
    async upsertOneIssueStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneIssueStatusResolver = UpsertOneIssueStatusResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IssueStatus_1.IssueStatus, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneIssueStatusArgs_1.UpsertOneIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneIssueStatusResolver.prototype, "upsertOneIssueStatus", null);
exports.UpsertOneIssueStatusResolver = UpsertOneIssueStatusResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueStatus_1.IssueStatus)
], UpsertOneIssueStatusResolver);
