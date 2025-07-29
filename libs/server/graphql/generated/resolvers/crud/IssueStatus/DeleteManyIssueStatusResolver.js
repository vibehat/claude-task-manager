"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyIssueStatusResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyIssueStatusArgs_1 = require("./args/DeleteManyIssueStatusArgs");
const IssueStatus_1 = require("../../../models/IssueStatus");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyIssueStatusResolver = class DeleteManyIssueStatusResolver {
    async deleteManyIssueStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyIssueStatusResolver = DeleteManyIssueStatusResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyIssueStatusArgs_1.DeleteManyIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyIssueStatusResolver.prototype, "deleteManyIssueStatus", null);
exports.DeleteManyIssueStatusResolver = DeleteManyIssueStatusResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueStatus_1.IssueStatus)
], DeleteManyIssueStatusResolver);
