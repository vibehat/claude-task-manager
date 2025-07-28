"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIssueLabelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateIssueLabelArgs_1 = require("./args/AggregateIssueLabelArgs");
const IssueLabel_1 = require("../../../models/IssueLabel");
const AggregateIssueLabel_1 = require("../../outputs/AggregateIssueLabel");
const helpers_1 = require("../../../helpers");
let AggregateIssueLabelResolver = class AggregateIssueLabelResolver {
    async aggregateIssueLabel(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateIssueLabelResolver = AggregateIssueLabelResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateIssueLabel_1.AggregateIssueLabel, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateIssueLabelArgs_1.AggregateIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateIssueLabelResolver.prototype, "aggregateIssueLabel", null);
exports.AggregateIssueLabelResolver = AggregateIssueLabelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueLabel_1.IssueLabel)
], AggregateIssueLabelResolver);
