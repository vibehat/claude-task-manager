"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIssuePriorityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateIssuePriorityArgs_1 = require("./args/AggregateIssuePriorityArgs");
const IssuePriority_1 = require("../../../models/IssuePriority");
const AggregateIssuePriority_1 = require("../../outputs/AggregateIssuePriority");
const helpers_1 = require("../../../helpers");
let AggregateIssuePriorityResolver = class AggregateIssuePriorityResolver {
    async aggregateIssuePriority(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateIssuePriorityResolver = AggregateIssuePriorityResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateIssuePriority_1.AggregateIssuePriority, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateIssuePriorityArgs_1.AggregateIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateIssuePriorityResolver.prototype, "aggregateIssuePriority", null);
exports.AggregateIssuePriorityResolver = AggregateIssuePriorityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssuePriority_1.IssuePriority)
], AggregateIssuePriorityResolver);
