"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstIssueLabelOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstIssueLabelOrThrowArgs_1 = require("./args/FindFirstIssueLabelOrThrowArgs");
const IssueLabel_1 = require("../../../models/IssueLabel");
const helpers_1 = require("../../../helpers");
let FindFirstIssueLabelOrThrowResolver = class FindFirstIssueLabelOrThrowResolver {
    async findFirstIssueLabelOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstIssueLabelOrThrowResolver = FindFirstIssueLabelOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => IssueLabel_1.IssueLabel, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstIssueLabelOrThrowArgs_1.FindFirstIssueLabelOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstIssueLabelOrThrowResolver.prototype, "findFirstIssueLabelOrThrow", null);
exports.FindFirstIssueLabelOrThrowResolver = FindFirstIssueLabelOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueLabel_1.IssueLabel)
], FindFirstIssueLabelOrThrowResolver);
