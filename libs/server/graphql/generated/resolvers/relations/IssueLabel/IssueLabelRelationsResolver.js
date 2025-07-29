"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Issue_1 = require("../../../models/Issue");
const IssueLabel_1 = require("../../../models/IssueLabel");
const Label_1 = require("../../../models/Label");
const helpers_1 = require("../../../helpers");
let IssueLabelRelationsResolver = class IssueLabelRelationsResolver {
    async issue(issueLabel, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.findUniqueOrThrow({
            where: {
                id: issueLabel.id,
            },
        }).issue({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async label(issueLabel, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.findUniqueOrThrow({
            where: {
                id: issueLabel.id,
            },
        }).label({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.IssueLabelRelationsResolver = IssueLabelRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Issue_1.Issue, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IssueLabel_1.IssueLabel, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueLabelRelationsResolver.prototype, "issue", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Label_1.Label, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IssueLabel_1.IssueLabel, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueLabelRelationsResolver.prototype, "label", null);
exports.IssueLabelRelationsResolver = IssueLabelRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueLabel_1.IssueLabel)
], IssueLabelRelationsResolver);
