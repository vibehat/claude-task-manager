"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyIssueLabelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyIssueLabelArgs_1 = require("./args/UpdateManyIssueLabelArgs");
const IssueLabel_1 = require("../../../models/IssueLabel");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyIssueLabelResolver = class UpdateManyIssueLabelResolver {
    async updateManyIssueLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyIssueLabelResolver = UpdateManyIssueLabelResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyIssueLabelArgs_1.UpdateManyIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyIssueLabelResolver.prototype, "updateManyIssueLabel", null);
exports.UpdateManyIssueLabelResolver = UpdateManyIssueLabelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueLabel_1.IssueLabel)
], UpdateManyIssueLabelResolver);
