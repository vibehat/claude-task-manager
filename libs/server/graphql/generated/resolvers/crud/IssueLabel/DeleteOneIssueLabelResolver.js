"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneIssueLabelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneIssueLabelArgs_1 = require("./args/DeleteOneIssueLabelArgs");
const IssueLabel_1 = require("../../../models/IssueLabel");
const helpers_1 = require("../../../helpers");
let DeleteOneIssueLabelResolver = class DeleteOneIssueLabelResolver {
    async deleteOneIssueLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneIssueLabelResolver = DeleteOneIssueLabelResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IssueLabel_1.IssueLabel, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneIssueLabelArgs_1.DeleteOneIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneIssueLabelResolver.prototype, "deleteOneIssueLabel", null);
exports.DeleteOneIssueLabelResolver = DeleteOneIssueLabelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueLabel_1.IssueLabel)
], DeleteOneIssueLabelResolver);
