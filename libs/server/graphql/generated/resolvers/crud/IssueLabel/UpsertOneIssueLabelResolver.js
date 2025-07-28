"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneIssueLabelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneIssueLabelArgs_1 = require("./args/UpsertOneIssueLabelArgs");
const IssueLabel_1 = require("../../../models/IssueLabel");
const helpers_1 = require("../../../helpers");
let UpsertOneIssueLabelResolver = class UpsertOneIssueLabelResolver {
    async upsertOneIssueLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneIssueLabelResolver = UpsertOneIssueLabelResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IssueLabel_1.IssueLabel, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneIssueLabelArgs_1.UpsertOneIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneIssueLabelResolver.prototype, "upsertOneIssueLabel", null);
exports.UpsertOneIssueLabelResolver = UpsertOneIssueLabelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueLabel_1.IssueLabel)
], UpsertOneIssueLabelResolver);
