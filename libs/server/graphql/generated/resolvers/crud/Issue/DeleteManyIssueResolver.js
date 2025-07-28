"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyIssueResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyIssueArgs_1 = require("./args/DeleteManyIssueArgs");
const Issue_1 = require("../../../models/Issue");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyIssueResolver = class DeleteManyIssueResolver {
    async deleteManyIssue(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyIssueResolver = DeleteManyIssueResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyIssueArgs_1.DeleteManyIssueArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyIssueResolver.prototype, "deleteManyIssue", null);
exports.DeleteManyIssueResolver = DeleteManyIssueResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Issue_1.Issue)
], DeleteManyIssueResolver);
