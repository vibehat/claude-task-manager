"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyIssueResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyIssueArgs_1 = require("./args/UpdateManyIssueArgs");
const Issue_1 = require("../../../models/Issue");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyIssueResolver = class UpdateManyIssueResolver {
    async updateManyIssue(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyIssueResolver = UpdateManyIssueResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyIssueArgs_1.UpdateManyIssueArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyIssueResolver.prototype, "updateManyIssue", null);
exports.UpdateManyIssueResolver = UpdateManyIssueResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Issue_1.Issue)
], UpdateManyIssueResolver);
