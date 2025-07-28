"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstIssuePriorityOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstIssuePriorityOrThrowArgs_1 = require("./args/FindFirstIssuePriorityOrThrowArgs");
const IssuePriority_1 = require("../../../models/IssuePriority");
const helpers_1 = require("../../../helpers");
let FindFirstIssuePriorityOrThrowResolver = class FindFirstIssuePriorityOrThrowResolver {
    async findFirstIssuePriorityOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstIssuePriorityOrThrowResolver = FindFirstIssuePriorityOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => IssuePriority_1.IssuePriority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstIssuePriorityOrThrowArgs_1.FindFirstIssuePriorityOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstIssuePriorityOrThrowResolver.prototype, "findFirstIssuePriorityOrThrow", null);
exports.FindFirstIssuePriorityOrThrowResolver = FindFirstIssuePriorityOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssuePriority_1.IssuePriority)
], FindFirstIssuePriorityOrThrowResolver);
