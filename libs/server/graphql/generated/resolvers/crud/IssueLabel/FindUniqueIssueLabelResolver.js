"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueIssueLabelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueIssueLabelArgs_1 = require("./args/FindUniqueIssueLabelArgs");
const IssueLabel_1 = require("../../../models/IssueLabel");
const helpers_1 = require("../../../helpers");
let FindUniqueIssueLabelResolver = class FindUniqueIssueLabelResolver {
    async issueLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueIssueLabelResolver = FindUniqueIssueLabelResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => IssueLabel_1.IssueLabel, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueIssueLabelArgs_1.FindUniqueIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueIssueLabelResolver.prototype, "issueLabel", null);
exports.FindUniqueIssueLabelResolver = FindUniqueIssueLabelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueLabel_1.IssueLabel)
], FindUniqueIssueLabelResolver);
