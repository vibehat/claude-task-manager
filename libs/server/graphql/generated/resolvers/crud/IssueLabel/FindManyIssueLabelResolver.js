"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyIssueLabelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyIssueLabelArgs_1 = require("./args/FindManyIssueLabelArgs");
const IssueLabel_1 = require("../../../models/IssueLabel");
const helpers_1 = require("../../../helpers");
let FindManyIssueLabelResolver = class FindManyIssueLabelResolver {
    async issueLabels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyIssueLabelResolver = FindManyIssueLabelResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [IssueLabel_1.IssueLabel], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyIssueLabelArgs_1.FindManyIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyIssueLabelResolver.prototype, "issueLabels", null);
exports.FindManyIssueLabelResolver = FindManyIssueLabelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueLabel_1.IssueLabel)
], FindManyIssueLabelResolver);
