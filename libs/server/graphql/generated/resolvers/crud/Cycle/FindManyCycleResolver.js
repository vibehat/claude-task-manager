"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCycleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyCycleArgs_1 = require("./args/FindManyCycleArgs");
const Cycle_1 = require("../../../models/Cycle");
const helpers_1 = require("../../../helpers");
let FindManyCycleResolver = class FindManyCycleResolver {
    async cycles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyCycleResolver = FindManyCycleResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Cycle_1.Cycle], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCycleArgs_1.FindManyCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCycleResolver.prototype, "cycles", null);
exports.FindManyCycleResolver = FindManyCycleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cycle_1.Cycle)
], FindManyCycleResolver);
