"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueIssuePriorityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueIssuePriorityArgs_1 = require("./args/FindUniqueIssuePriorityArgs");
const IssuePriority_1 = require("../../../models/IssuePriority");
const helpers_1 = require("../../../helpers");
let FindUniqueIssuePriorityResolver = class FindUniqueIssuePriorityResolver {
    async issuePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueIssuePriorityResolver = FindUniqueIssuePriorityResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => IssuePriority_1.IssuePriority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueIssuePriorityArgs_1.FindUniqueIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueIssuePriorityResolver.prototype, "issuePriority", null);
exports.FindUniqueIssuePriorityResolver = FindUniqueIssuePriorityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssuePriority_1.IssuePriority)
], FindUniqueIssuePriorityResolver);
