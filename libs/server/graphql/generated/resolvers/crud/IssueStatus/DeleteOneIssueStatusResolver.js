"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneIssueStatusResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneIssueStatusArgs_1 = require("./args/DeleteOneIssueStatusArgs");
const IssueStatus_1 = require("../../../models/IssueStatus");
const helpers_1 = require("../../../helpers");
let DeleteOneIssueStatusResolver = class DeleteOneIssueStatusResolver {
    async deleteOneIssueStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneIssueStatusResolver = DeleteOneIssueStatusResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IssueStatus_1.IssueStatus, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneIssueStatusArgs_1.DeleteOneIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneIssueStatusResolver.prototype, "deleteOneIssueStatus", null);
exports.DeleteOneIssueStatusResolver = DeleteOneIssueStatusResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueStatus_1.IssueStatus)
], DeleteOneIssueStatusResolver);
