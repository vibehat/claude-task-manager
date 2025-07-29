"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstIssuePriorityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstIssuePriorityArgs_1 = require("./args/FindFirstIssuePriorityArgs");
const IssuePriority_1 = require("../../../models/IssuePriority");
const helpers_1 = require("../../../helpers");
let FindFirstIssuePriorityResolver = class FindFirstIssuePriorityResolver {
    async findFirstIssuePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstIssuePriorityResolver = FindFirstIssuePriorityResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => IssuePriority_1.IssuePriority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstIssuePriorityArgs_1.FindFirstIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstIssuePriorityResolver.prototype, "findFirstIssuePriority", null);
exports.FindFirstIssuePriorityResolver = FindFirstIssuePriorityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssuePriority_1.IssuePriority)
], FindFirstIssuePriorityResolver);
