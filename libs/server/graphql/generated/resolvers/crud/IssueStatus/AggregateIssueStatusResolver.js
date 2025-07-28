"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIssueStatusResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateIssueStatusArgs_1 = require("./args/AggregateIssueStatusArgs");
const IssueStatus_1 = require("../../../models/IssueStatus");
const AggregateIssueStatus_1 = require("../../outputs/AggregateIssueStatus");
const helpers_1 = require("../../../helpers");
let AggregateIssueStatusResolver = class AggregateIssueStatusResolver {
    async aggregateIssueStatus(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateIssueStatusResolver = AggregateIssueStatusResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateIssueStatus_1.AggregateIssueStatus, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateIssueStatusArgs_1.AggregateIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateIssueStatusResolver.prototype, "aggregateIssueStatus", null);
exports.AggregateIssueStatusResolver = AggregateIssueStatusResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueStatus_1.IssueStatus)
], AggregateIssueStatusResolver);
