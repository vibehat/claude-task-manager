"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIssueResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateIssueArgs_1 = require("./args/AggregateIssueArgs");
const Issue_1 = require("../../../models/Issue");
const AggregateIssue_1 = require("../../outputs/AggregateIssue");
const helpers_1 = require("../../../helpers");
let AggregateIssueResolver = class AggregateIssueResolver {
    async aggregateIssue(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateIssueResolver = AggregateIssueResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateIssue_1.AggregateIssue, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateIssueArgs_1.AggregateIssueArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateIssueResolver.prototype, "aggregateIssue", null);
exports.AggregateIssueResolver = AggregateIssueResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Issue_1.Issue)
], AggregateIssueResolver);
